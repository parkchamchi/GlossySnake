export { Corpus, Paragraph, Token, AnnotatorInfo };

class Token {
	constructor(txt, gloss, is_delimiter) {
		this.txt = txt;
		this.gloss = gloss;
		this.is_delimiter = is_delimiter;
	}
}

class AnnotatorInfo {
	constructor(annotator_name, lang_from, lang_to) {
		this.annotator_name = annotator_name;
		this.lang_from = lang_from;
		this.lang_to = lang_to;
	}
}

class Paragraph {
	constructor(pstate, tokens, is_delimiter, token_delimiters, original_text, annotator_info_obj) {
		this.pstate = pstate;
		this.tokens = tokens;
		this.is_delimiter = is_delimiter;
		this.token_delimiters = token_delimiters;
		this.original_text = original_text;
		this.annotator_info_obj = annotator_info_obj;
	}
}

class Corpus {
	constructor(paragraphs, paragraph_delimiters, original_text, p_div_locs) {
		this.paragraphs = paragraphs;
		this.paragraph_delimiters = paragraph_delimiters;
		this.original_text = original_text;
		this.p_div_locs = p_div_locs;
	}

	static init_with_txt(original_text) {
		return new Corpus(
			[], null, original_text, []
		);
	}
}