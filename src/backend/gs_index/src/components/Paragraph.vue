<script>
	import Token from "./Token.vue";
	import { sharedState } from "../sharedState.js";

	export default {
		props: {
			p: {
				type: Object,
				required: true,
			},
			index: {
				type: Number,
				required: true,
			},
			remote: {
				type: Boolean,
				default: false,
			}
		},
		components: {
			Token,
		},
		computed: {
			isAnnotateButtonVisible() {
				return /*this.remote &&*/ !this.p.is_delimiter && this.p.tokens && this.p.tokens.length
			},
			shouldShowManipulatorButtons() { //See Corpus.vue
				return (this.remote && sharedState.toRemote) || (!this.remote && !sharedState.toRemote);
			}
		},
		data() {
			return {
				selectedTokens: new Set(),
				showPre: false,
			}
		},
		methods: {
			annotateP() {
				this.$emit("annotateP", this.index);
			},
			reannotateP() {
				this.$emit("reannotateP", this.index, Array.from(this.selectedTokens));
			},
			onSelectionChanged({ tIndex, isSelected }) {
				if (isSelected)
					this.selectedTokens.add(tIndex);
				else
					this.selectedTokens.delete(tIndex);
			},
		},
	}
</script>

<template>
	<div class='paragraph_wrapper'>
		<span v-if="isAnnotateButtonVisible && shouldShowManipulatorButtons" class="paragraph_annotate_buttons_span">
			<button class="corpus_button btn btn-light" @click="annotateP(index)">
				Annotate
			</button>
			<button class="corpus_button btn btn-light" @click="reannotateP(index)">
				Reannotate
			</button>
			<br>
		</span>

		<pre v-if="showPre"
			>{{ JSON.stringify(p) }}</pre>

		<Token v-for="(t, index) in p.tokens"
			:key="index"
			:t="t"
			:index="index"
			@selectionChanged="onSelectionChanged" />
	</div>
</template>

<style scoped>
	.paragraph_annotate_buttons_span {
		display: flex;
		justify-content: flex-end;
		/*gap: 4px;*/
	}

	.corpus_button {
		font-size: 80%;
	}
</style>