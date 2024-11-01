<script>
	import { EventBus } from "../EventBus.js";
	import { Corpus } from "../serializables.js";
	//import { sharedState } from '../sharedState.js';

	export default {
		data() {
			return {
				originalText: "",
			}
		},
		methods: {
			async onUploadButtonClicked() {
				const corpus = Corpus.init_with_txt(this.originalText);
				corpus.id = this.makeTitle(this.originalText);
				EventBus.emit("addLocalCorpus", corpus);
			},
			async onJsonFileInput(event) {
				const file = event.target.files[0];
				const content = await file.text();
				const corpus = JSON.parse(content);

				corpus.id = "JSON Corpus";
				EventBus.emit("addLocalCorpus", corpus);
			},
			makeTitle(str, maxlen=16) {
				if (!str)
					return "Corpus";

				return str.substring(0, maxlen);
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