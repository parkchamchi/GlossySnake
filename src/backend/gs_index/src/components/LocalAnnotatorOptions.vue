<script>
	import { sharedState } from '../sharedState.js';

	export default {
		data() {
			return sharedState;
		},
		watch: {
			openaiApiKey() {
				this.emitChange();
			},
			openaiModel() {
				this.emitChange();
			},
			outerRetry() {
				this.emitChange();
			},
			innerRetry() {
				this.emitChange();
			},
			fullPrompt() {
				this.emitChange();
			},
		},
		computed: {
			visibility() {
				return !sharedState.toRemote;
			},
		},
		methods: {
			emitChange() {
				sharedState.openaiApiKey = this.openaiApiKey;
				sharedState.openaiModel = this.openaiModel;
				sharedState.outerRetry = this.outerRetry;
				sharedState.innerRetry = this.innerRetry;
				sharedState.fullPrompt = this.fullPrompt;
			},
			exportData() {
				console.log("test");
				const dataStr = JSON.stringify(sharedState, null, 2);
				const blob = new Blob([dataStr], { type: 'application/json' });
				const url = URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = 'sharedState.json';
				a.click();
				URL.revokeObjectURL(url);
			},
			async importData(event) {
				const file = event.target.files[0];
				const content = await file.text();
				const importedState = JSON.parse(content);
								
				Object.keys(importedState).forEach(key => {
					if (sharedState.hasOwnProperty(key))
						sharedState[key] = importedState[key];
				});
			},
		},
	}
</script>

<template>
	<h4>Local Annotator Options</h4>
	<div v-if="visibility" 
		class="container mt-3">
		<div class="row">
			<div class="col-md-2">
				<label for="openaiApiKey">OpenAI API Key</label>
				<input
					type="password"
					class="form-control"
					id="openaiApiKey"
					v-model="openaiApiKey"
				/>
			</div>
			<div class="col-md-2">
				<label for="openaiModel">OpenAI Model</label>
				<input
					type="text"
					class="form-control"
					id="openaiModel"
					v-model="openaiModel"
				/>
			</div>
			<div class="col-md-2">
				<label for="outerRetry">Outer Retry</label>
				<input
					type="number"
					class="form-control"
					id="outerRetry"
					v-model="outerRetry"
				/>
			</div>
			<div class="col-md-2">
				<label for="innerRetry">Inner Retry</label>
				<input
					type="number"
					class="form-control"
					id="innerRetry"
					v-model="innerRetry"
				/>
			</div>
			<div class="col-md-2 d-flex align-items-center">
				<input
					type="checkbox"
					class="form-check-input"
					id="fullPrompt"
					v-model="fullPrompt"
				/>
				<label class="form-check-label" for="fullPrompt">Full Prompt</label>
			</div>
		</div>
		<div class="row">
			<div class="col-md-2 d-flex align-items-center">
				<button class="btn btn-link mt-3"><a href="https://github.com/parkchamchi/GlossySnake/blob/master/docs/design/local.md">Info</a></button>
			</div>
			<div class="col-md-2 d-flex align-items-center">
				<button class="btn btn-link mt-3" @click="exportData">Export</button>
			</div>
			<div class="col-md-2 d-flex align-items-center">
				<input type="file" @change="importData" class="form-control">
			</div>
		</div>
	</div>
</template>