<script>
	import { GsApi } from "../GsApi.js"
	import { EventBus } from "../EventBus.js";
	import { Corpus } from "../serializables.js";

	export default {
		data() {
			return {
				api: new GsApi(),
				originalText: "",
				toRemote: true,
			}
		},
		methods: {
			async onUploadButtonClicked() {
				if (this.toRemote)
					this.uploadOriginalTextRemote();
				else
					this.uploadOriginalTextLocal();
			},
			async onJsonFileInput(event) {
				let file = event.target.files[0];
				let content = await file.text();
				content = JSON.parse(content);

				//TODO: repeats
				this.api.submit("/upload", "POST", {
					"corpus": content,
				})
					.then((res) => res.json())
					.then((json) => {
						EventBus.emit("addAlert", { message: "Uploaded corpus " + json.corpus_id });
					});
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

			async uploadOriginalTextLocal() {
				const corpus_id = "the corpus id";
				const corpus = Corpus.init_with_txt(this.originalText);
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
		<br>

		<input v-model="toRemote" 
			type="checkbox" name="toRemote" id="toRemote_input" class="form-check-input"
			checked disabled> <!-- TODO -->
		<label for="toRemote_input" class="form-check-label">To the Server</label>
	</div>
</template>

<style scoped>
	textarea {
		width: 90%;
		height: 18em;
	}
</style>