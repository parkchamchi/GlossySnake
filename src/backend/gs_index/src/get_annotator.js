export { get_annotator };

import { Annotator } from "./annotator.js";
import { ChatgptAnnotator } from "./annotator_chatgpt.js";

function get_annotator(annotator_name, token_usage_callback) {
	console.log(annotator_name);
	if (annotator_name && annotator_name.startsWith("chatgpt_")) {
		return new ChatgptAnnotator(annotator_name, token_usage_callback);
	}

	return new Annotator();
}