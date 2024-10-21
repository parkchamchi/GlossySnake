import { reactive } from 'vue';

//Load localStorage. It is set in `MiscOptions`
const savedState = JSON.parse(localStorage.getItem('sharedState')) || {};

export const sharedState = reactive({
	annotator_name: 'chatgpt_ft0',
	lang_from: 'German',
	lang_to: 'English',

	toRemote: true,

	openaiApiKey: null,
	openaiModel: "gpt-4o-mini",
	outerRetry: 2,
	innerRetry: 3,
	maxGloss: 80,
	fullPrompt: true,

	currentOpenCorpus: "",
	psPerScreen: 16,
	glossColor: "gray",
	txtSize: 150,
	glossSize: 90,

	...savedState, //Load
});