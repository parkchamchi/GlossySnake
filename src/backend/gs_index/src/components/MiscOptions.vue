<script>
	import { sharedState } from '../sharedState.js';
	import { watch } from 'vue';

	export default {
		data() {
			return sharedState;
		},
		watch: {
			psPerScreen() {
				this.emitChange();
			},
		},
		methods: {
			emitChange() {
				sharedState.psPerScreen = this.psPerScreen;
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
				<label for="psPerScreen">Paragraphs per screen <br><em>(0 for inf)</em></label>
				<input
					type="number"
					class="form-control"
					id="psPerScreen"
					v-model="psPerScreen"
					min="0"
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