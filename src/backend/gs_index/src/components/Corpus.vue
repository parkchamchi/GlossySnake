<script>
	import { GsApi } from "../GsApi.js"
	import { sharedState } from "../sharedState.js";
	import { EventBus } from "../EventBus.js";
	import Paragraph from "./Paragraph.vue";

	export default {
		props: {
			corpus_id: {
				type: Number,
				required: true,
			},
			corpus: {
				type: Object,
				required: true,
			},
		},
		components: {
			Paragraph,
		},
		data() {
			return {
				api: new GsApi(),
				sharedState,

				isCorpusVisible: false,
				showPre: false,
			}
		},
		computed: {
			pseudoState() {
				const psEmpty = !this.corpus.paragraphs || this.corpus.paragraphs.length <= 0;
				if (psEmpty)
					return "PLAIN";

				const toTest = this.corpus.paragraphs[0];
				return toTest.pstate;
			},

			//TODO: gen.
			divideButtonClass() {
				const pr = (this.pseudoState == "PLAIN");
				return {
					'btn-primary': pr,
					'btn-light': !pr,
				};
			},
			parseButtonClass() {
				const pr = (this.pseudoState == "DIVIDED");

				return {
					'btn-primary': pr,
					'btn-light': !pr,
				};
			},
			annotateButtonClass() {
				const pr = (this.pseudoState == "PARSED");
				return {
					'btn-primary': pr,
					'btn-light': !pr,
				};
			},
		},
		methods: {
			toggleCorpusVisibility() {
				this.isCorpusVisible = !this.isCorpusVisible;
			},
			download() {
				const json = JSON.stringify(this.corpus);
				console.log("Downloading...");

				let a = document.createElement("a"); //dummy a
				let file = new Blob([json], {type: "text/plain"});
				a.download = this.corpus_id + ".corpus.json";
				a.href = URL.createObjectURL(file);
				a.click();
			},
			async divide(p_delim='\n') {
				this.api.submit("/parser/divide", "POST", {
					corpus_id: this.corpus_id,
					divide_options: {
						p_delims: [p_delim],
					},
				});
			},
			async parse() {
				this.api.submit("/parser/parse", "POST", {
					corpus_id: this.corpus_id,
					parse_options: {
						t_delims: null,
					},
				});
			},
			async annotate(target_paragraphs=null) {
				this.api.submit("/annotator/annotate", "POST", {
					corpus_id: this.corpus_id,
					annotate_options: {
						annotator_name: this.sharedState.annotator_name,
						lang_from: this.sharedState.lang_from,
						lang_to: this.sharedState.lang_to,

						target_paragraphs: target_paragraphs,
					},
				});
			},
			async reannotate(target_paragraphs, target_tokens) {
				if (!target_tokens) {
					console.error("target_tokens is not given");
					return;
				}
				if (target_tokens.length == 0) {
					const errmsg = "No token selected.";
					EventBus.emit("addAlert", { message: errmsg, alertClass: "alert-warning" });
					return;
				}

				//Ignores annotator_name, etc.
				this.api.submit("/annotator/reannotate", "POST", {
					corpus_id: this.corpus_id,
					annotate_options: {
						annotator_name: this.sharedState.annotator_name,
						lang_from: this.sharedState.lang_from,
						lang_to: this.sharedState.lang_to,
						
						target_paragraphs: target_paragraphs,
					},
					reannotate_options: {
						target_tokens: target_tokens,
					},
				});
			},
			onAnnotateP(p_index) {
				this.annotate([p_index]);
			},
			onReannotateP(p_index, target_tokens) {
				this.reannotate([p_index], target_tokens);
			},
		},
	}
</script>

<template>
	<div class='corpus_wrapper'>
		<hr>
		<h4 @click="toggleCorpusVisibility()">{{ "CORPUS: " + corpus_id }}</h4>
		<div v-if="isCorpusVisible" class="corpus">
			<span class="corpus_buttons_span">
				<button class="corpus_button btn btn-light" @click="download()">Download</button>

				<button :class="['corpus_button', 'btn', divideButtonClass]" @click="divide()">Divide</button>
				<button :class="['corpus_button', 'btn', divideButtonClass]" @click="divide('\\n\\n')">Divide (for poems)</button>

				<button :class="['corpus_button', 'btn', parseButtonClass]" @click="parse()">Parse</button>

				<button :class="['corpus_button', 'btn', annotateButtonClass]" @click="annotate()">
					Annotate
				</button>
			</span>
			<br>

			<pre v-if="showPre"
				class="corpus-pre">{{ JSON.stringify(corpus) }}</pre>

			<h4>paragraphs</h4>
			<Paragraph v-for="(p, index) in corpus.paragraphs"
				:key="index"
				:p="p"
				:index="index"
				@annotateP="onAnnotateP"
				@reannotateP="onReannotateP" />
		</div>
	</div>
</template>

<style scoped>
	.corpus_buttons_span {
		display: flex;
		justify-content: flex-end;
		/*gap: 4px;*/
	}

	.corpus_button {
		font-size: 90%;
	}

	.corpus-pre {
		max-width: 100%;
		overflow: auto;
	}
</style>