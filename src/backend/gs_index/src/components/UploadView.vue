<script>
	import { GsApi } from "../GsApi.js"
	import { EventBus } from "../EventBus.js";

	export default {
		data() {
			return {
				api: new GsApi(),
				originalText: "",
			}
		},
		methods: {
			async onUploadButtonClicked() {
				this.api.submit("/upload", "POST", {
					"original_text": this.originalText,
				})
					.then((res) => res.json())
					.then((json) => {
						EventBus.emit("addAlert", { message: "Uploaded corpus " + json.corpus_id });
					});
			},
			async onJsonFileInput(event) {
				let file = event.target.files[0];
				let content = await file.text();
				content = JSON.parse(content);
				console.log(content);

				//TODO: repeats
				this.api.submit("/upload", "POST", {
					"corpus": content,
				})
					.then((res) => res.json())
					.then((json) => {
						EventBus.emit("addAlert", { message: "Uploaded corpus " + json.corpus_id });
					});
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
			spellcheck="true"
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
	</div>
</template>

<style scoped>
	textarea {
		width: 90%;
		height: 18em;
	}
</style>