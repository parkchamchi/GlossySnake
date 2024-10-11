import { reactive } from 'vue';

export const sharedState = reactive({
	annotator_name: 'chatgpt_ft0',
	lang_from: 'German',
	lang_to: 'English',

	toRemote: false,

	openaiApiKey: null,
	openaiModel: "gpt-4o-mini",
	outerRetry: 2,
	innerRetry: 3,
	fullPrompt: true,
});