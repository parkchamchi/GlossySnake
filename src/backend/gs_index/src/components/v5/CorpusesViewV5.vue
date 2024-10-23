<script>
	import { EventBus } from "../../EventBus.js";
	
	import CorpusV5 from "./CorpusV5.vue"

	export default {
		components: {
			CorpusV5,
		},
		data() {
			return {
				corpusIds: JSON.parse(localStorage.getItem("corpusIds")) || ["sample"], //UUIDs. To be saved in localStorage
			};
		},
		watch: {
			localCorpuses: {
				handler(newValue) {
					localStorage.setItem("corpusIds", JSON.stringify(newValue));
				},
				deep: true,
			}
		},
		methods: {
			async addLocalCorpus(corpus) {
				console.log("addLocalCorpus called");
			},
		},
		async created() {
			EventBus.on("addLocalCorpusV5", this.addLocalCorpus); // From UploadView			
		},

		mounted() {
			
		},
		beforeDestroy() {
			EventBus.off("updateCorpusesV5", this.updateCorpuses); // Clean up the event listener
		},
	}
</script>

<template>
	<div v-for="(corpusId, index) in corpusIds">
		<h4>{{ corpusId }}</h4>
		<CorpusV5
			:key="corpusId"
			:corpusId="corpusId"
		/>
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