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
			maxGloss() {
				this.emitChange();
			},
			fullPrompt() {
				this.emitChange();
			},
		},
		computed: {

		},
		methods: {
			emitChange() {
				sharedState.openaiApiKey = this.openaiApiKey;
				sharedState.openaiModel = this.openaiModel;
				sharedState.outerRetry = this.outerRetry;
				sharedState.innerRetry = this.innerRetry;
				sharedState.maxGloss = this.maxGloss;
				sharedState.fullPrompt = this.fullPrompt;
			},
		},
	}
</script>

<template>
	<h4>Local Annotator Options</h4>
	<div
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
					min="1"
				/>
			</div>
			<div class="col-md-2">
				<label for="innerRetry">Inner Retry</label>
				<input
					type="number"
					class="form-control"
					id="innerRetry"
					v-model="innerRetry"
					min="1"
				/>
			</div>
			<div class="col-md-2">
				<label for="maxGloss">Max Gloss</label>
				<input
					type="number"
					class="form-control"
					id="maxGloss"
					v-model="maxGloss"
					min="40"
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
		</div>
	</div>
</template>