<script>
	import { corpusStorage } from "../corpusStorage.js";
	import { sharedState } from "../sharedState.js";
	import { EventBus } from "../EventBus.js";
	import { Parser } from "../parser.js";
	import { get_annotator } from "../get_annotator.js"
	import Paragraph from "./Paragraph.vue";

	export default {
		props: {
			corpusId: {
				required: true,
			},
		},
		components: {
			Paragraph,
		},
		data() {
			return {
				sharedState,
				corpusStorage,

				corpus: null,
				cursor: null,

				showMetadata: false,
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

			glossColor() {
				return sharedState.glossColor;
			},
			glossSize() {
				return sharedState.glossSize + "%";
			},
			txtSize() {
				return sharedState.txtSize + "%";
			},
		},
		methods: {
			closeCorpus() {
				sharedState.currentOpenCorpus = "";
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
				Parser.divide_into_paragraphs(this.corpus, [p_delim]);

				this.corpusStorage.update(this.corpus);
			},
			async parse() {
				for (const p of this.corpus.paragraphs)
					Parser.parse_paragraph(p);

				this.corpusStorage.update(this.corpus);
			},
			async annotate(target_paragraphs=null) {
				const annotator = get_annotator(sharedState.annotator_name); //TODO
				const lang_from = sharedState.lang_from;
				const lang_to = sharedState.lang_to;
				
				if (target_paragraphs) {
					//skip assert

					if (target_paragraphs.length == 1 && target_paragraphs[0] == -1) {
						//annotate the non-`"ANNOTATED"`s
						target_paragraphs = this.corpus.paragraphs
							.map((p, i) => ({ p, i }))
							.filter(({ p }) => !p.is_delimiter && p.pstate != "ANNOTATED")
							.map(({ i }) => i);
					}
					console.log(target_paragraphs);
				}

				for (const [i, p] of this.corpus.paragraphs.entries()) {
					if (target_paragraphs)
						if (!target_paragraphs.includes(i))
							continue;

					await annotator.annotate(p, lang_from, lang_to);
					this.corpusStorage.update(this.corpus);
				}
			},
			async reannotate(target_paragraphs, target_tokens) {
				const annotator = get_annotator(sharedState.annotator_name); //TODO
				const lang_from = sharedState.lang_from;
				const lang_to = sharedState.lang_to;

				//Below is a translation from python...
				//Should be against a paragraph, not a corpus
				const target_paragraph_idx = target_paragraphs[0];
				const target_p = this.corpus.paragraphs[target_paragraph_idx];

				//Ineffective.
				if (!lang_from) lang_from = target_p.annotator_info_obj.lang_from;
				if (!lang_to) lang_to = target_p.annotator_info_obj.lang_to;

				await annotator.reannotate(target_p, lang_from, lang_to, target_tokens);

				this.corpusStorage.update(this.corpus);
			},

			psPrev() {
				let cp = this.cursor - 1;

				if (cp >= 0) {
					this.cursor = cp;
					this.scrollToTop();
					corpusStorage.setCursor(this.corpusId, this.cursor);
				}
			},
			psNext() {
				let cp = this.cursor + 1;

				if (cp < this.corpus.paragraphs.length) {
					this.cursor = cp;
					this.scrollToTop();
					corpusStorage.setCursor(this.corpusId, this.cursor);
				}
			},
			scrollToTop() {
				this.$nextTick(() => {
					const corpusElement = this.$refs.corpus;
					corpusElement.scrollTop = 0;
				});
			},

			toggleShowMetadata() {
				this.showMetadata =!this.showMetadata;
			},

			onAnnotateP(p_index) {
				this.annotate([p_index]);
			},
			onReannotateP(p_index, target_tokens) {
				this.reannotate([p_index], target_tokens);
			},
		},

		watch: {
		
		},

		async created() {
			this.corpus = await this.corpusStorage.read(this.corpusId);
			this.cursor = this.corpusStorage.getCursor(this.corpusId) || 0;
		},
		beforeDestroy() {

		},
	}
</script>

<template>
	<h4 @click="closeCorpus()"
		ref="header">{{ corpusId }}
	</h4>
	<hr>
	<div v-if="this.corpus"
		:style="{ '--gloss-color': glossColor, '--gloss-size': glossSize, '--txt-size': txtSize }">
		<div class="pButtonsDiv">
			<button class="btn" @click="psPrev"> << </button>
			<input v-model.number="cursor" type="number" class="form-control w-auto d-inline" :min="0" :max="corpus.paragraphs.length-1" />
			<span>/{{ this.corpus.paragraphs.length - 1 }}</span>
			<button class="btn" @click="psNext"> >> </button>

			<button class="btn" 
				@click="toggleShowMetadata"
				style="margin-left: auto; margin-right: 0;">[i]</button>
		</div>
		<div class="corpus" ref="corpus">
			<div v-if="showMetadata">
				<hr>
				<div class="corpus_buttons_span" >
					<button class="corpus_button btn btn-light" @click="download()">Download</button>
				
					<button :class="['corpus_button', 'btn', divideButtonClass]" @click="divide()">Divide</button>
					<button :class="['corpus_button', 'btn', divideButtonClass]" @click="divide('\\n\\n')">Divide (for poems)</button>

					<button :class="['corpus_button', 'btn', parseButtonClass]" @click="parse()">Parse</button>
					<button :class="['corpus_button', 'btn', annotateButtonClass]" @click="annotate([-1])">
						Annotate
					</button>
					<button :class="['corpus_button', 'btn', annotateButtonClass]" @click="annotate(null)">
						Annotate (Reset)
					</button>
				</div>

				<ul>
					<li v-for="(v, k) in corpus.metadata">
						<strong>{{ k }}:</strong> {{ v }}
					</li>
				</ul>

				<hr>
			</div>
			<br>

			<Paragraph v-if="corpus.paragraphs[cursor]"
				:key="cursor"
				:p="corpus.paragraphs[cursor]"
				:index="cursor"
				@annotateP="onAnnotateP"
				@reannotateP="onReannotateP" />
		</div>
	</div>
</template>

<style scoped>
	.corpus_wrapper {
		display: flex;
		flex-direction: column;
		max-height: 99vh;
	}
	.corpus {
		flex: 1;
		overflow-y: auto;
	}

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

	.pButtonsDiv {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>