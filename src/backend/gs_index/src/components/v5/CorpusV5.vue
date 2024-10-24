<script>
	import sampleCorpusesV5 from "./sampleCorpusesV5.json";
	import { sharedState } from "../../sharedState.js";

	export default {
		props: {
			corpusId: {
				required: true,
			},
		},
		data() {
			return {
				xml: sampleCorpusesV5[0],
			};
		},
		computed: {
			corpusHtml() {
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(this.xml, "application/xml");
				const htmlCollection = xmlDoc.getElementsByTagName("html");

				// Convert HTMLCollection to string
				let htmlString = "";
				if (htmlCollection.length > 0)
					htmlString = htmlCollection[0].innerHTML;
				
				return htmlString;
			},

			glossColor() {
				return sharedState.glossColor;
			},
			glossSize() {
				return sharedState.glossSize + "%";
			},
			txtSize() {
				return sharedState.txtSize + "%";
			},
		}
	}
</script>

<template>
	<div v-html="corpusHtml" class="corpusHtml"
		:style="{ '--gloss-color': glossColor, '--gloss-size': glossSize, '--txt-size': txtSize }">
	</div>

</template>

<style scoped>
	.corpusHtml {
		font-size: var(--txt-size);
		font-family: serif;
		line-height: calc(var(--txt-size) + var(--gloss-size));
	}
</style>