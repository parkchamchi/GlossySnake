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

				localCorpuses: [...sampleCorpuses],
				remoteCorpuses: [],
			};
		},
		methods: {
			async updateCorpuses() {
				const res = await this.api.submit("/corpuses/");
				const data = await res.json();
				this.remoteCorpuses = data;
			},
		},
		created() {
			EventBus.on("updateCorpuses", this.updateCorpuses); // Listen for the error event
		},
		beforeDestroy() {
			EventBus.off("updateCorpuses", this.updateCorpuses); // Clean up the event listener
		},
	}
</script>

<template>
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