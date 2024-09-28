<script>
	export default {
		props: {
			t: {
				type: Object,
				required: true,
			},
			index: {
				type: Number,
				required: true,
			}
		},
		data() {
			return {
				isSelected: false,
			}
		},
		computed: {
			is_delimiter() {
				return this.t.is_delimiter;
			},
			should_linebreak() {
				return this.t.txt.includes('\n');
			},
			txt() {
				return this.t.txt;
			},
			gloss() {
				let gloss = this.t.gloss;
				if (gloss == "!UNKNOWN")
					gloss = "-";
				return gloss;
			},
		},
		methods: {
			toggle() {
				this.isSelected = !this.isSelected;
				this.$emit("selectionChanged", { tIndex: this.index, isSelected: this.isSelected});
			},
		},
	}
</script>

<template>
	<div v-if="!is_delimiter"
		:class="['token_wrapper', 'card', { 'selected-token': isSelected }]"
		@click="toggle()">
		<ul class="list-group list-group-flush">
			<li class="list-group-item token_txt">{{ txt }}</li>
			<li class="list-group-item gloss">{{ gloss }}</li>
		</ul>
	</div>
	<br v-else-if="should_linebreak">
	<div v-else
		class="token_wrapper">
		<span>{{ txt }}</span>
	</div>
</template>

<style scoped>
	.token_txt {
		font-size: 150%;
		font-family: serif;
	}

	.gloss {
		font-size: 90%;
		/*font-style: italic;*/
		font-family: monospace;
		text-align: center;

		padding-top: 0.1em;
	}

	.token_txt, .gloss {
		padding-left: 0.25em;
		padding-right: 0.25em;
	}

	li, .token_wrapper {
		border: none;
		display: inline;
	}

	.token_wrapper {
		display: inline-block;
		margin-right: 1px;
		background-color: #ffffff;
	}

	.selected-token {
		border: 1px solid;
	}
</style>