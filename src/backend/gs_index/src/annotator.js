//Follows annotator.py

export { get_annotator, TOKEN_UNKNOWN };

const TOKEN_UNKNOWN = "!UNKNOWN";

function get_annotator(annotator_name, token_usage_callback) {
	if (annotator_name && annotator_name.startsWith("chatgpt_")) {
		alert("TODO");
	}

	return new Annotator();
}

class Annotator {
	constructor() {
		this.annotator_name = "DUMMYGLOSS";
	}

	annotate(p, lang_from, lang_to) {
		this.lang_from = lang_from;
		this.lang_to = lang_to;

		if (!p.is_delimiter) {
			if (p.tokens && p.tokens.length > 0)
				this.put_gloss(p);
			p.state = "ANNOTATED";

			p.annotator_info_obj.lang_from = this.lang_from
			p.annotator_info_obj.lang_to = this.lang_to
			p.annotator_info_obj.annotator_name = this.annotator_name
		}
	}

	reannotate(p, lang_from, lang_to, target_tokens) {
		this.lang_from = lang_from;
		this.lang_to = lang_to;

		if (p.is_delimiter)
			return;

		this.reput_gloss(p, target_tokens);
	}

	put_gloss(p) {
		for (const token of p.tokens) {
			if (token.is_delimiter)
				continue;
			token.gloss = `${this.annotator_name}(${token.txt})`
		}
	}

	reput_gloss(p, target_tokens) {
		for (const [i, t] of p.tokens.entries()) {
			if (!target_tokens.includes(i))
				continue;

			t.gloss = `${this.annotator_name}_reannotated_\`${this.lang_from}\`_\`${this.lang_to}\``
		}
	}
}