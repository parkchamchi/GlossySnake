<script>
	import Header from "./components/Header.vue";
	import AnnotatorSelect from "./components/AnnotatorSelect.vue";
	import LocalAnnotatorOptions from "./components/LocalAnnotatorOptions.vue";
	import MiscOptions from "./components/MiscOptions.vue";

	import CorpusesView from "./components/CorpusesView.vue";
	import UploadView from "./components/UploadView.vue";
	import Corpus from "./components/Corpus.vue";

	import { EventBus } from "./EventBus.js";
	import { sharedState } from "./sharedState.js";

	export default {
		components: {
			Header,	CorpusesView, AnnotatorSelect, LocalAnnotatorOptions, MiscOptions,
			UploadView,
			Corpus,
		},
		data() {
			return {

			}
		},
		computed: {
			currentOpenCorpus() {
				return sharedState.currentOpenCorpus;
			}
		},
		methods: {
			
		},
		mounted() {
			//EventBus.on("openCorpus", this.openCorpus);
			//EventBus.on("closeCorpus", this.closeCorpus);
		},
		beforeDestroy() {
			//EventBus.off("openCorpus", this.openCorpus);
			//EventBus.off("closeCorpus", this.closeCorpus);
		},
	}
</script>

<template>
	<div v-if="currentOpenCorpus">
		<Corpus :corpusId="currentOpenCorpus" />
	</div>
	<div v-else>
		<header>
			<Header />
		</header>

		<main>
			<AnnotatorSelect />
			<LocalAnnotatorOptions />
			<MiscOptions />
			<hr>

			<CorpusesView />
			<hr>
			
			<UploadView />
		</main>
	</div>
</template>

<style scoped>
	body {
		font-family: sans-serif;
		text-align: center;
	}
	a:link {
		color: lightgrey;
	}

	main {
		text-align: center;
	}
</style>
