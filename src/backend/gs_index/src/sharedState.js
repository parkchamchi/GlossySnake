import { reactive } from 'vue';

export const sharedState = reactive({
	annotator_name: 'chatgpt_ft0',
	lang_from: 'German',
	lang_to: 'English',

	toRemote: false,

	//TODO: REMOVE THESE
	openaiApiKey: null,
	openaiModel: null,
	outerRetry: 2,
	innerRetry: 3,
});