<script>
	import { EventBus } from "../EventBus.js";
	import { GsApi } from "../GsApi.js"
	import { sharedState } from "../sharedState.js";
	import sampleCorpuses from "../sampleCorpuses.json"
	import Corpus from "./Corpus.vue"

	export default {
		components: {
			Corpus,
		},
		data() {
			return {
				api: new GsApi(),
				sampleHost: "https://parkchamchi.github.io/GlossySnake/samples/v1/",
				db: null,

				localCorpuses: [...sampleCorpuses],
				remoteCorpuses: [],

				remoteSampleFilenames: [],
			};
		},
		watch: {
			localCorpuses: {
				handler(newValue) {
					this.saveCorpuses(newValue);
				},
				deep: true,
			}
		},
		methods: {
			async updateCorpuses() {
				const res = await this.api.submit("/corpuses/");
				const data = await res.json();
				this.remoteCorpuses = data;
			},
			async getRemoteSamples() {
				await fetch(this.sampleHost)
					.then((data) => data.json())
					.then((json) => {
						this.remoteSampleFilenames = json.filenames;
					});
			},
			async getRemoteSampleCorpus(filename) {
				fetch(this.sampleHost+filename)
					.then((data) => data.json())
					.then((corpus) => {
						const corpus_id = filename.replace(".corpus.json", "");
						this.addLocalCorpus({corpus_id, corpus});
					})
					/*.then(() => {
						this.remoteSampleFilenames = this.remoteSampleFilenames.filter(f => f !== filename)
					})*/;
			},
			async addLocalCorpus({corpus_id, corpus}) {
				//corpus_id to be unique and not ""
				let unique_corpus_id = corpus_id;
				if (unique_corpus_id == "") unique_corpus_id = "Corpus";
				
				const existingIds = new Set(this.localCorpuses.map(c => c.corpus_id));
				let counter = 1;
				while (existingIds.has(unique_corpus_id))
					unique_corpus_id = `${corpus_id} (${counter++})`;
				
				this.localCorpuses.push({
					"corpus_id": unique_corpus_id,
					"corpuses_history": [corpus],
				});
			},

			clearCorpuses() {
				this.localCorpuses = [...sampleCorpuses];
			},

			openDB(name, version, upgradeCallback) {
				return new Promise((resolve, reject) => {
					const request = indexedDB.open(name, version);
					request.onupgradeneeded = (event) => {
						const db = event.target.result;
						upgradeCallback(db);
					};
					request.onsuccess = (event) => {
						resolve(event.target.result);
					};
					request.onerror = (event) => {
						reject(event.target.error);
					};
				});
			},
			getCorpuses() {
				return new Promise((resolve, reject) => {
					const transaction = this.db.transaction(['corpuses'], 'readonly');
					const store = transaction.objectStore('corpuses');
					const request = store.getAll();
					request.onsuccess = () => {
						resolve(request.result);
					};
					request.onerror = event => {
						reject(event.target.error);
					};
				});
			},
			saveCorpuses(newValue) {
				const transaction = this.db.transaction(['corpuses'], 'readwrite');
				const store = transaction.objectStore('corpuses');
				store.clear();
				newValue.forEach((corpus) => {
					// Convert reactive data to plain objects
					const plainCorpus = JSON.parse(JSON.stringify(corpus));
					store.put(plainCorpus);
				});
				return transaction.complete;
			},
		},
		async created() {
			EventBus.on("updateCorpuses", this.updateCorpuses); // Listen for the error event
			EventBus.on("addLocalCorpus", this.addLocalCorpus); // From UploadView

			this.getRemoteSamples();

			//Get DB
			this.db = await this.openDB('corpusDB', 1, (db) => {
				if (!db.objectStoreNames.contains('corpuses')) {
					const store = db.createObjectStore('corpuses', { keyPath: 'id', autoIncrement: true });
					// Initialize with sampleCorpuses
					sampleCorpuses.forEach((corpus) => {
						store.add(corpus);
					});
				}
			});
			this.localCorpuses = await this.getCorpuses() || [...sampleCorpuses];				
		},
		mounted() {
			sharedState.currentOpenCorpus = "";
		},
		beforeDestroy() {
			EventBus.off("updateCorpuses", this.updateCorpuses); // Clean up the event listener
			EventBus.off("addLocalCorpus", this.addLocalCorpus); // From UploadView
		},
	}
</script>

<template>
	<p @click="clearCorpuses">[Clear data]</p>
	<div v-if="remoteSampleFilenames.length > 0">
		<h4>Get a sample:</h4>
		<p v-for="(filename, index) in remoteSampleFilenames" style="display: inline;">
			<span @click="getRemoteSampleCorpus(filename)" class="sampleLinkP">
				{{ filename }}
			</span>
			<span> | </span>
		</p>
	</div>

	<div>
		<Corpus v-for="(corpus, index) in localCorpuses"
			:key="index"
			:corpus=corpus.corpuses_history.at(-1)
			:corpus_id=corpus.corpus_id
			:remote=false />
		<Corpus v-for="(corpus, index) in remoteCorpuses"
			:key="index"
			:corpus=corpus.corpuses_history.at(-1)
			:corpus_id=corpus.corpus_id 
			:remote=true />
	</div>
</template>

<style scoped>
	.sampleLinkP {
		font-style: italic;
		text-decoration: underline;
		cursor: pointer;
		display: inline;
	}

	.disabled{
		color: grey;
		text-decoration: none;
		cursor: default;
	}
</style>