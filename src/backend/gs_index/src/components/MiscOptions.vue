<script>
	import { sharedState } from '../sharedState.js';
	import { watch } from 'vue';

	export default {
		data() {
			return sharedState;
		},
		watch: {
			glossColor() {
				this.emitChange();
			},
			txtSize() {
				this.emitChange();
			},
			glossSize() {
				this.emitChange();
			},
		},
		methods: {
			emitChange() {
				sharedState.glossColor = this.glossColor;
				sharedState.txtSize = this.txtSize;
				sharedState.glossSize = this.glossSize;
			},
			exportData() {
				console.log("Exporting");
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
		mounted() {
			//Set localStorage
			watch(
				() => sharedState,
				(newState) => {
					localStorage.setItem("sharedState", JSON.stringify(newState));
				},
				{ deep: true }
			);
		}
	}
</script>

<template>
	<h4>Misc. Options</h4>
	<div class="container mt-3">
		<div class="row">
			<div class="col-md-2">
				<label for="glossColor">Gloss color</label>
				<input
					type="color"
					class="form-control"
					id="glossColor"
					v-model="glossColor"
				/>
			</div>
			<div class="col-md-2">
				<label for="txtSize">Text Size</label>
				<input
					type="range"
					class="form-control"
					id="txtSize"
					v-model="txtSize"
					min="50"
					max="150"
				/>
			</div>
			<div class="col-md-2">
				<label for="glossSize">Gloss Size</label>
				<input
					type="range"
					class="form-control"
					id="glossSize"
					v-model="glossSize"
					min="50"
					max="150"
				/>
			</div>
			<div class="col-md-2 d-flex align-items-center">
				<input type="file" @change="importData" class="form-control">
			</div>
			<div class="col-md-2 d-flex align-items-center">
				<button class="btn btn-link mt-3" @click="exportData">Export</button>
			</div>
		</div>
	</div>
</template>