export { corpusStorage };

import { EventBus } from "./EventBus.js";

class CorpusStorageInner {
	constructor() {
		this.initCache();
		this.connectDb();
		this.initCursors();
	}

	create(content) {
		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction(['corpuses'], 'readwrite');
			const store = transaction.objectStore('corpuses');

			const checkAndAdd = (content, id) => {
				const getRequest = store.get(id);
	
				getRequest.onsuccess = () => {
					if (getRequest.result) {
						// If id exists, modify it
						const match = id.match(/^(.*?)( \((\d+)\))?$/);
						const baseId = match[1];
						const num = match[3] ? parseInt(match[3], 10) + 1 : 1;
						const newId = `${baseId} (${num})`;
						content.id = newId;
						checkAndAdd(content, newId);
					} else {
						// If id does not exist, add the content
						const addRequest = store.add(content);
						addRequest.onsuccess = () => this.setCache().then(() => resolve(addRequest.result));
						addRequest.onerror = (event) => reject(event.target.error);
					}
				};
	
				getRequest.onerror = (event) => reject(event.target.error);
			};
	
			if (!content.id)
				content.id = "id";
			checkAndAdd(content, content.id);
		});
	}

	read(id) {
		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction(['corpuses'], 'readonly');
			const store = transaction.objectStore('corpuses');

			const request = store.get(id);

			request.onsuccess = () => resolve(request.result);
			request.onerror = (event) => reject(event.target.error);
			//this.setCache();
		});
	}

	update(content) {
		content = JSON.parse(JSON.stringify(content));

		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction(['corpuses'], 'readwrite');
			const store = transaction.objectStore('corpuses');

			const request = store.put(content);

			request.onsuccess = () => this.setCache().then(() => resolve(request.result));
			request.onerror = (event) => reject(event.target.error);
			this.setCache();
		});
	}

	delete(id) {
		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction(['corpuses'], 'readwrite');
			const store = transaction.objectStore('corpuses');

			const request = store.delete(id);

			request.onsuccess = () => this.setCache().then(() => resolve());
			request.onerror = (event) => reject(event.target.error);
			this.setCache();
		});
	}

	reset() {
		console.log("Resetting.");
		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction(['corpuses'], 'readwrite');
			const store = transaction.objectStore('corpuses');
	
			const clearRequest = store.clear();
			this.setCache();
	
			clearRequest.onsuccess = () => this.setCache().then(() => resolve());
			clearRequest.onerror = (event) => reject(event.target.error);
		});
	}

	initCache() {
		this.cache = ["loading..."];
	}

	async connectDb() {
		this.db = await openDB('corpusDBv5', 1, (db) => {
			if (!db.objectStoreNames.contains('corpuses')) {
				const _ = db.createObjectStore('corpuses', { keyPath: 'id', autoIncrement: true});
			}
		});
		// {id: json}
		
		this.setCache();
	}

	async setCache() {
		//Following the db.
		return new Promise((resolve, reject) => {
			const transaction = this.db.transaction(['corpuses'], 'readonly');
			const store = transaction.objectStore('corpuses');
			const request = store.openCursor();
			const ids = [];
	
			request.onsuccess = (event) => {
				const cursor = event.target.result;
				if (cursor) {
					ids.push(cursor.key); // Assuming the key is the `id`
					cursor.continue();
				} else {
					this.cache = ids;
					EventBus.emit("updateCorpusIds");
					resolve();
				}
			};
			request.onerror = (event) => {
				reject(event.target.error);
			};
		});
	}

	initCursors() {
		this.cursors = JSON.parse(localStorage.getItem('corpusCursors')) || {};
	}
	setCursor(corpusId, val) {
		this.cursors[corpusId] = val;
		localStorage.setItem('corpusCursors', JSON.stringify(this.cursors));
	}
	getCursor(corpusId) {
		return this.cursors[corpusId];
	}
}

function openDB(name, version, upgradeCallback) {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(name, version);
		request.onupgradeneeded = (event) => {
			const db = event.target.result;
			upgradeCallback(db);
		};
		request.onsuccess = (event) => resolve(event.target.result);
		request.onerror = (event) => reject(event.target.error);
	});
}

const corpusStorage = new CorpusStorageInner();
