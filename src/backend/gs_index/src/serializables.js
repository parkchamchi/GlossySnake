export { Corpus, Paragraph, Token, Metadata };

class Token {
	constructor(txt, gloss, is_delimiter) {
		this.txt = txt;
		this.gloss = gloss;

		this.is_delimiter = is_delimiter;
	}
}

class Metadata {
	constructor(title, author, annotation_info, original_language, gloss_language, note) {
		this.title = title;
		this.author = author;
		this.annotation_info = annotation_info;
		this.original_language = original_language;
		this.gloss_language = gloss_language;
		this.note = note;
	}
}

class Paragraph {
	constructor(tokens) {
		this.tokens = tokens;
	}

	static init_with_txt(original_text) {
		const p = new Paragraph([]);
		p.original_text = original_text;
		return p;
	}
}

class Corpus {
	constructor(paragraphs, metadata) {
		this.version = 5;
		
		this.paragraphs = paragraphs;
		this.metadata = metadata;
	}

	static init_with_txt(original_text) {
		const corpus = new Corpus([], new Metadata());
		corpus.original_text = original_text;
		return corpus;
	}
}