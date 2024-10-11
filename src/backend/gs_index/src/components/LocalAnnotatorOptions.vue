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
		methods: {
			emitChange() {
				sharedState.openaiApiKey = this.openaiApiKey;
				sharedState.openaiModel = this.openaiModel;
				sharedState.outerRetry = this.outerRetry;
				sharedState.innerRetry = this.innerRetry;
				sharedState.fullPrompt = this.fullPrompt;
			},
		}
	}
</script>


<template>
	<div class="container mt-3">
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
	</div>
</template>