export { Parser };

import { Paragraph, Token, AnnotatorInfo } from "./serializables.js";

const STRING_WHITESPACE = ' \t\n\r\x0b\x0c';

//From parser.py by Copilot. May work...

function tokenize(txt, delimiters) {
    // Includes the delimiters to the output list.
    // Returns [[token: string, is_delimiter: boolean }]

    // Escape the delimiters for use in a regex pattern
    const pattern = delimiters.split('').map(d => d.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&')).join('|');
    
    // Split the text using the pattern, keeping the delimiters
    const tokens = txt.split(new RegExp(`(${pattern})`));
    
    // Filter out empty tokens and map them to the desired format
    return tokens
        .filter(token => token !== '')
        .map(token => ({
            token: token,
            is_delimiter: delimiters.includes(token)
        }));
}

class Parser {
	//TODO: AD HOC CODES
	static divide_into_paragraphs(corpus, paragraph_delimiters=['\n']) {
		const originalText = corpus.original_text;
		let delims = paragraph_delimiters.map(delim => delim.replace("\\n", "\n"));

		let fragments = [originalText];
		// Sort delimiters by length in descending order
		delims.sort((a, b) => b.length - a.length);
		delims.forEach(delim => {
			for (let i = 0; i < fragments.length; i++) {
				let splitted = fragments[i].split(delim); // Split by delimiter

				// Create tuples with the delimiter
				splitted = splitted.flatMap(el => [el, delim]).slice(0, -1); // Remove last delimiter

				fragments[i] = splitted; // Update the fragment
			}

			// Flatten the fragments
			fragments = [].concat(...fragments);
		});

		//fragments: concat them so each of them exceed `minLen`
		const minLen = 1024;
		let reducedFragments = [];
		let currentFragment = "";
		fragments.forEach((fragment) => {
			if (currentFragment.length + fragment.length < minLen || paragraph_delimiters.includes(fragment)) {
				currentFragment += fragment;
			}
			else {
				if (currentFragment.length > 0)
					reducedFragments.push(currentFragment);

				currentFragment = fragment;
			}
		});
		if (currentFragment.length > 0)
			reducedFragments.push(currentFragment);
		fragments = reducedFragments;
		
		// Create Paragraph objects
		corpus.paragraphs = fragments.map(f => new Paragraph(
			"DIVIDED",
			[],
			paragraph_delimiters.includes(f),
			"",
			f,
			new AnnotatorInfo()
		));

		// Store the paragraph delimiters
		corpus.paragraph_delimiters = paragraph_delimiters;
    }

	static parse_paragraph(paragraph, token_delimiters=STRING_WHITESPACE) { // Default to whitespace characters
        if (!token_delimiters) {
            token_delimiters = STRING_WHITESPACE; // Default to whitespace if none provided
        }

        if (paragraph.is_delimiter) {
            paragraph.tokens = [new Token(paragraph.original_text, null, true)];
        } else {
            const tokensWithDelimiters = tokenize(paragraph.original_text, token_delimiters);
            paragraph.tokens = tokensWithDelimiters.map(({ token, is_delimiter }) => new Token(token, null, is_delimiter));
        }

        paragraph.pstate = "PARSED";
        paragraph.token_delimiters = token_delimiters;
    }
}