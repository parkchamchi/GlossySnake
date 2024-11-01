<script>
	import { EventBus } from "../EventBus.js";
	import { corpusStorage } from "../corpusStorage.js";
	import { sharedState } from "../sharedState.js";

	export default {
		components: {
			
		},
		data() {
			return {
				//TODO: to v5
				sampleHost: "https://glossysnake.com/samples/v5/",
				remoteSampleFilenames: [],

				corpusStorage,
				corpusIds: ["loading."],
			};
		},
		methods: {
			/* Remote */
			async getRemoteSamples() {
				await fetch(this.sampleHost)
					.then((data) => data.json())
					.then((json) => {
						this.remoteSampleFilenames = json.filenames;
					});
			},
			async getRemoteSampleCorpus(filename) {
				fetch(this.sampleHost+filename)
					.then((data) => data.json())
					.then((corpus) => {
						const corpus_id = filename.replace(".corpus.json", "");
						corpus.id = corpus_id;
						this.addLocalCorpus(corpus);
					})
			},

			/* Local */
			async addLocalCorpus(corpus) {
				console.log("addLocalCorpus", corpus.id);
				this.corpusStorage.create(corpus);
			},
			updateCorpusIds() {
				this.corpusIds = this.corpusStorage.cache;
			},
			onCorpusIdClicked(id) {
				//EventBus.emit("openCorpus", id);
				sharedState.currentOpenCorpus = id;
			},
			clearCorpuses() {
				this.corpusStorage.reset();
			},
		},
		async created() {
			EventBus.on("updateCorpusIds", this.updateCorpusIds);
			EventBus.on("addLocalCorpus", this.addLocalCorpus); // From UploadView

			this.getRemoteSamples();
		},
		mounted() {
			sharedState.currentOpenCorpus = "";
			this.updateCorpusIds();
		},
		beforeDestroy() {
			EventBus.off("updateCorpusIds", this.updateCorpusIds);
			EventBus.off("addLocalCorpus", this.addLocalCorpus); // From UploadView
		},
	}
</script>

<template>
	<p @click="clearCorpuses">[Clear data]</p>
	<div v-if="remoteSampleFilenames.length > 0">
		<h4>Get a sample:</h4>
		<p v-for="(filename, index) in remoteSampleFilenames" style="display: inline;">
			<span @click="getRemoteSampleCorpus(filename)" class="sampleLinkP">
				{{ filename }}
			</span>
			<span> | </span>
		</p>
	</div>

	<div>
		<div v-for="(corpusId, index) in corpusIds"
			@click="onCorpusIdClicked(corpusId)">
			<hr>
			<h4>{{ corpusId }}</h4>
		</div>
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