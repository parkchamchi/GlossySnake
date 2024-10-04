<script>
	import { GsApi } from "../GsApi.js"
	import { EventBus } from "../EventBus.js";
	import { Corpus } from "../serializables.js";
	import { sharedState } from '../sharedState.js';

	export default {
		data() {
			return {
				api: new GsApi(),
				originalText: "",
			}
		},
		methods: {
			async onUploadButtonClicked() {
				if (sharedState.toRemote)
					this.uploadOriginalTextRemote();
				else
					this.uploadOriginalTextLocal();
			},
			async onJsonFileInput(event) {
				const file = event.target.files[0];
				const content = await file.text();
				const corpus = JSON.parse(content);

				if (sharedState.toRemote)
					this.uploadJsonFileRemote(corpus);
				else
					this.uploadJsonFileLocal(corpus);
			},

			async uploadOriginalTextRemote() {
				this.api.submit("/upload", "POST", {
					"original_text": this.originalText,
				})
					.then((res) => res.json())
					.then((json) => {
						EventBus.emit("addAlert", { message: "Uploaded corpus " + json.corpus_id });
					});
			},
			async uploadJsonFileRemote(corpus) {
				this.api.submit("/upload", "POST", {
					"corpus": corpus,
				})
					.then((res) => res.json())
					.then((json) => {
						EventBus.emit("addAlert", { message: "Uploaded corpus " + json.corpus_id });
					});
			},

			async uploadOriginalTextLocal() {
				const corpus_id = "the corpus id (TODO)";
				const corpus = Corpus.init_with_txt(this.originalText);
				EventBus.emit("addLocalCorpus", {corpus_id, corpus});
			},
			async uploadJsonFileLocal(corpus) {
				const corpus_id = "the corpus id (JSON) (TODO)";
				EventBus.emit("addLocalCorpus", {corpus_id, corpus});
			}
		}
	}
</script>

<template>
	<div id="frontend_upload_div">
		<h3>Upload...</h3>
		<label for="frontend_original_text">Original Text</label><br>
		<textarea v-model="originalText"
			class="context_input auto-resize field_input"
			name="frontend_original_text"
			spellcheck="false"
			autofocus
			placeholder="Original Text"
			id="frontend_original_text_textarea"></textarea>
		<br>

		<button @click="onUploadButtonClicked()"
			id="frontend_original_text_button"
			class="btn btn-primary">
			Upload
		</button>
		<br>

		<p>...or the JSON file</p>
		<input type="file" id="json_file_input" @change="onJsonFileInput">
		<br>
	</div>
</template>

<style scoped>
	textarea {
		width: 90%;
		height: 18em;
	}
</style>