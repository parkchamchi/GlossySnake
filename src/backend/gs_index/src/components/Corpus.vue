<script>
	import { GsApi } from "../GsApi.js"
	import { sharedState } from "../sharedState.js";
	import { EventBus } from "../EventBus.js";
	import { Parser } from "../parser.js";
	import { get_annotator } from "../get_annotator.js"
	import Paragraph from "./Paragraph.vue";

	export default {
		props: {
			corpus_id: {
				required: true,
			},
			corpus: {
				type: Object,
				required: true,
			},
			remote: {
				type: Boolean,
				default: false,
			},
			cursor: {
				type: Number,
				default: 0,
			}
		},
		components: {
			Paragraph,
		},
		data() {
			return {
				api: new GsApi(),
				sharedState,

				currentP: this.cursor,
				psPerScreen: 8,

				showPre: false,
				mounted: false,
			}
		},
		computed: {
			isCorpusVisible() {
				return this.mounted && sharedState.currentOpenCorpus == this.corpus_id;
			},
			visibleParagraphs() {
				const targets = Array.from({ length: this.psPerScreen }, (_, i) => this.currentP + i);
				
				return this.corpus.paragraphs.filter((_, i) => 
					targets.includes(i)
				);
			},

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

			header() {
				return (this.remote) ? "REMOTE" : "LOCAL";
			},
			shouldShowManipulatorButtons() {
				return (this.remote && sharedState.toRemote) || (!this.remote && !sharedState.toRemote && sharedState.openaiApiKey);
			},
		},
		methods: {
			toggleCorpusVisibility() {
				if (sharedState.currentOpenCorpus == this.corpus_id)
					sharedState.currentOpenCorpus = "";
				else
					sharedState.currentOpenCorpus = this.corpus_id;
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
				if (sharedState.toRemote)
					return this.divideRemote(p_delim);
				else
					return this.divideLocal(p_delim);
			},
			async parse() {
				if (sharedState.toRemote)
					return this.parseRemote();
				else
					return this.parseLocal();
			},
			async annotate(target_paragraphs=null) {
				if (sharedState.toRemote)
					return this.annotateRemote(target_paragraphs);
				else
					return this.annotateLocal(target_paragraphs);
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

				if (sharedState.toRemote)
					return this.reannotateRemote(target_paragraphs, target_tokens);
				else
					return this.reannotateLocal(target_paragraphs, target_tokens);
			},

			async divideRemote(p_delim) {
				this.api.submit("/parser/divide", "POST", {
					corpus_id: this.corpus_id,
					divide_options: {
						p_delims: [p_delim],
					},
				});
			},
			async parseRemote() {
				this.api.submit("/parser/parse", "POST", {
					corpus_id: this.corpus_id,
					parse_options: {
						t_delims: null,
					},
				});
			},
			async annotateRemote(target_paragraphs) {
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
			async reannotateRemote(target_paragraphs, target_tokens) {
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
		
			async divideLocal(p_delim) {
				Parser.divide_into_paragraphs(this.corpus, [p_delim]);
			},
			async parseLocal() {
				for (const p of this.corpus.paragraphs)
					Parser.parse_paragraph(p);
			},
			async annotateLocal(target_paragraphs) {
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
				}
			},
			async reannotateLocal(target_paragraphs, target_tokens) {
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
			},

			scrollToOriginalHeader() {
				const headerElement = this.$refs.header;
				headerElement.scrollIntoView({
					behavior: 'smooth'
				});
			},
			handleResizeOrScroll() {
				if (this.isCorpusVisible)
					this.scrollToOriginalHeader();
			},
			psPrev() {
				let cp = this.currentP - this.psPerScreen;

				if (cp >= 0) {
					this.currentP = cp;
					this.scrollToTop();
				}
			},
			psNext() {
				let cp = this.currentP + this.psPerScreen;

				if (cp < this.corpus.paragraphs.length) {
					this.currentP = cp;
					this.scrollToTop();
				}
			},
			scrollToTop() {
				this.$nextTick(() => {
					const corpusElement = this.$refs.corpus;
					corpusElement.scrollTop = 0;
				});
			},

			onAnnotateP(p_index) {
				this.annotate([p_index]);
			},
			onReannotateP(p_index, target_tokens) {
				this.reannotate([p_index], target_tokens);
			},
		},

		watch: {
			isCorpusVisible(newval) {
				document.body.style.overflow = (newval) ? 'hidden' : '';
				this.scrollToOriginalHeader();
			}
		},

		mounted() {
			this.mounted = true;

			// Add event listeners for resize and scroll events
			window.addEventListener('resize', this.handleResizeOrScroll);
			window.addEventListener('scroll', this.handleResizeOrScroll);
		},
		beforeDestroy() {
			// Remove event listeners for resize and scroll events
			window.removeEventListener('resize', this.handleResizeOrScroll);
			window.removeEventListener('scroll', this.handleResizeOrScroll);
		},
	}
</script>

<template>
	<div :class="['corpus_wrapper', { 'full-screen': isCorpusVisible}]">
		<hr>
		<h4 @click="toggleCorpusVisibility()"
			ref="header">{{ header + ": " + corpus_id }}
		</h4>
		<div v-if="isCorpusVisible" class="pButtonsDiv">
			<button class="btn" @click="psPrev"> << </button>
			<button class="btn" @click="psNext"> >> </button>
		</div>
		<div v-if="isCorpusVisible" class="corpus" ref="corpus">
			<span class="corpus_buttons_span">
				<button class="corpus_button btn btn-light" @click="download()">Download</button>

				<span v-if="shouldShowManipulatorButtons">
					<button :class="['corpus_button', 'btn', divideButtonClass]" @click="divide()">Divide</button>
					<button :class="['corpus_button', 'btn', divideButtonClass]" @click="divide('\\n\\n')">Divide (for poems)</button>

					<button :class="['corpus_button', 'btn', parseButtonClass]" @click="parse()">Parse</button>
					<button :class="['corpus_button', 'btn', annotateButtonClass]" @click="annotate([-1])">
						Annotate
					</button>
					<button :class="['corpus_button', 'btn', annotateButtonClass]" @click="annotate(null)">
						Annotate (Reset)
					</button>
				</span>
			</span>
			<br>

			<pre v-if="showPre"
				class="corpus-pre">{{ JSON.stringify(corpus) }}</pre>

			<h4>paragraphs</h4>
			<Paragraph v-for="(p, index) in visibleParagraphs"
				:key="index"
				:p="p"
				:index="index"
				:remote=remote
				@annotateP="onAnnotateP"
				@reannotateP="onReannotateP" />
		</div>
	</div>
</template>

<style scoped>
	.corpus_wrapper {
		display: flex;
		flex-direction: column;
		max-height: 100vh;
	}
	.full-screen {
		height: 100vh;
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
</style>