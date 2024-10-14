<script>
	import { EventBus } from "../EventBus.js";
	import { GsApi } from "../GsApi.js"
	import sampleCorpuses from "../sampleCorpuses.json"
	import Corpus from "./Corpus.vue"

	export default {
		components: {
			Corpus,
		},
		data() {
			return {
				api: new GsApi(),
				sampleHost: "https://parkchamchi.github.io/GlossySnake/samples/v1/",

				localCorpuses: JSON.parse(localStorage.getItem("localCorpuses")) || [...sampleCorpuses],
				remoteCorpuses: [],

				remoteSampleFilenames: [],
			};
		},
		watch: {
			localCorpuses: {
				handler(newValue) {
					localStorage.setItem("localCorpuses", JSON.stringify(newValue))
				},
				deep: true,
			}
		},
		methods: {
			async updateCorpuses() {
				const res = await this.api.submit("/corpuses/");
				const data = await res.json();
				this.remoteCorpuses = data;
			},
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
						this.addLocalCorpus({corpus_id, corpus});
					})
					.then(() => {
						this.remoteSampleFilenames = this.remoteSampleFilenames.filter(f => f !== filename)
					});
			},
			async addLocalCorpus({corpus_id, corpus}) {
				this.localCorpuses.push({
					"corpus_id": corpus_id,
					"corpuses_history": [corpus],
				});
			}
		},
		created() {
			EventBus.on("updateCorpuses", this.updateCorpuses); // Listen for the error event
			EventBus.on("addLocalCorpus", this.addLocalCorpus); // From UploadView

			this.getRemoteSamples();
		},
		beforeDestroy() {
			EventBus.off("updateCorpuses", this.updateCorpuses); // Clean up the event listener
			EventBus.off("addLocalCorpus", this.addLocalCorpus); // From UploadView
		},
	}
</script>

<template>
	<div v-if="remoteSampleFilenames.length > 0">
		<h4>Get a sample:</h4>
		<p v-for="(filename, index) in remoteSampleFilenames"
			class="sampleLinkP"
			@click="getRemoteSampleCorpus(filename)">
			{{ filename }}
		</p>
	</div>

	<div>
		<Corpus v-for="(corpus, index) in localCorpuses"
			:key="index"
			:corpus=corpus.corpuses_history.at(-1)
			:corpus_id=corpus.corpus_id
			:remote=false />
		<Corpus v-for="(corpus, index) in remoteCorpuses"
			:key="index"
			:corpus=corpus.corpuses_history.at(-1)
			:corpus_id=corpus.corpus_id 
			:remote=true />
	</div>
</template>

<style scoped>
	.sampleLinkP {
		font-style: italic;
		text-decoration: underline;
		cursor: pointer;
	}

	.disabled{
		color: grey;
		text-decoration: none;
		cursor: default;
	}
</style>