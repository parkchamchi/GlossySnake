<script>
	import sampleCorpusesV5 from "./sampleCorpusesV5.json";

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
		}
	}
</script>

<template>
	<div v-html="corpusHtml"></div>
</template>