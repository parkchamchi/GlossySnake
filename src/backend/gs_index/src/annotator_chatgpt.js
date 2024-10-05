//Follows chatgpt_annoatator.py

export { ChatgptAnnotator };

import { Annotator } from "./annotator.js";
import { AnnotatorInfo } from "./serializables.js";

const GLOSS_DELIMITER = "||"
const TOKEN_TO_REANNOTATE = "!TO_REANNOTATE" //local
const TOKEN_TO_IGNORE = "!TOKEN_TO_IGNORE" //those not to be processed

function filterAlphabets(string) {
	return string.replace(/[^a-zA-Z]/g, ''); //`g`: global. cf. python's `re.sub()`
}

function looseComparison(origTxt, retTxt) {
	const filteredOrig = filterAlphabets(origTxt);
	const filteredRet = filterAlphabets(retTxt);

	if (!filteredOrig) {
		return true;
	}

	const setOrig = new Set(filteredOrig);
	const setRet = new Set(filteredRet);

	const intersection = new Set([...setOrig].filter(x => setRet.has(x)));
	const union = new Set([...setOrig, ...setRet]);

	const ratio = union.size > 0 ? intersection.size / union.size : 0;

	return ratio >= 0.5;
}

class ChatgptAnnotator extends Annotator {
	constructor(annotator_name, token_usage_callback) {
		super();
		this.annotator_name = annotator_name;
		this.glossFetcher = new GlossFetcher(true);
	}

	put_gloss(p) {
		// First, get the token strings. This ignores the delimiters.
		const tokensWithoutDelimiters = p.tokens.filter(token => !token.isDelimiter);
		const tokenStrs = tokensWithoutDelimiters.map(token => token.txt);

		// Since the ChatGPT has a length limit, chunk it
		const chunks = this.chunkize(tokenStrs);
		console.log(`Chunks: ${chunks}`);

		let glosses = [];
		let previousIndex = -1;

		for (const endIndex of chunks) {
			const length = endIndex - previousIndex;
			if (length <= 0) {
				console.warn("Warning: length <= 0");
				previousIndex = endIndex;
				continue;
			}
			console.log(`[${previousIndex + 1}:${endIndex + 1}] out of ${tokenStrs.length} (len: ${length})`);
			const chunkStrs = tokenStrs.slice(previousIndex + 1, endIndex + 1);
			const chunkGlosses = this.glossFetcher.tryFetchGloss(chunkStrs);
			glosses = glosses.concat(chunkGlosses);

			previousIndex = endIndex;
			console.log(`Chunk: ${chunkGlosses} (len: ${chunkGlosses.length})`);
		}

		for (let i = 0; i < tokensWithoutDelimiters.length; i++) {
			tokensWithoutDelimiters[i].gloss = glosses[i];
		}

		//paragraph.annotatorInfo = `ChatGptAnnotator_` + this.langFrom + `_` + this.langTo;
		p.annotator_info_obj = new AnnotatorInfo(this.annotator_name, this.lang_from, this.lang_to);
	}

	reput_gloss(p, target_tokens) {
		// R: Initially taking the `put_gloss` as a backbone... TODO: generalize these
		console.log("reput_gloss: target_tokens:", target_tokens);

		const tokensWithoutDelimiters = [];
		const reannotateBools = []; // [(str, bool), ...]
		const targetTokenIdxs = []; // Not counting the delimiters
		let indexNotDelimiter = 0;

		// Iterate over the paragraph tokens
		for (let i = 0; i < p.tokens.length; i++) {
			const token = p.tokens[i];
			if (token.isDelimiter) {
				continue;
			}

			tokensWithoutDelimiters.push(token);
			const shouldBeReannotated = target_tokens.includes(i);
			reannotateBools.push(shouldBeReannotated);
			if (shouldBeReannotated) {
				token.gloss = TOKEN_TO_REANNOTATE;
				targetTokenIdxs.push(indexNotDelimiter);
			}

			indexNotDelimiter++;
		}

		// Since the ChatGPT has a length limit, chunk it
		// R: target-centered chunking
		const chunksForReannotation = this.chunkizeForReannotation(reannotateBools);
		// R: ret.s [(p0, e0), ...] for [p0+1:e0+1], ... (to match above)
		console.log(`Chunks_for_reannotation: ${chunksForReannotation}`);

		//let previousIndex = -1;
		for (const [previousIndex, endIndex] of chunksForReannotation) {
			const length = endIndex - previousIndex;
			if (length <= 0) {
				console.warn("Warning: length <= 0");
				//previousIndex = endIndex;
				continue;
			}
			console.log(`[${previousIndex + 1}:${endIndex + 1}] out of ${tokensWithoutDelimiters.length} (len: ${length})`);

			// R: if the target in the chunk?
			if (!targetTokenIdxs.some(idx => idx < endIndex + 1 && previousIndex + 1 <= idx)) {
				console.log("Skipping this chunk...");
				//previousIndex = endIndex;
				throw new Error("chunkize_for_reannotation() returned invalid chunks");
			}

			const chunkTokens = tokensWithoutDelimiters.slice(previousIndex + 1, endIndex + 1);
			const chunkStrs = chunkTokens.map(t => t.txt);
			const chunkGlosses = chunkTokens.map(t => t.gloss);
			const fetchedGlosses = this.glossFetcher.tryFetchGloss(chunkStrs, { reannotationGlossStrs: chunkGlosses });

			//previousIndex = endIndex;
			console.log(`Chunk: ${fetchedGlosses} (len: ${fetchedGlosses.length})`);

			for (let j = 0; j < chunkTokens.length; j++) {
				const token = chunkTokens[j];
				const gloss = fetchedGlosses[j];
				if (token.gloss !== TOKEN_TO_REANNOTATE) {
					continue;
				}

				if (gloss === TOKEN_TO_IGNORE) {
					console.warn(`Token and Gloss not paired: ${token}, ${gloss}.\nchunkTokens: ${chunkTokens}\nchunkGlosses: ${fetchedGlosses}`);
				}

				token.gloss = gloss;
			}
		}
	}

	chunkize(tokenStrs, maxGloss=80) {
		// Returns the end indices
		const endChars = ['.', '!', '?'];

		// Find indices of tokens that contain end characters
		const idxWithEndChars = [];
		for (let i = 0; i < tokenStrs.length; i++) {
			const tokenStr = tokenStrs[i];
			if (endChars.some(ch => tokenStr.includes(ch))) {
				idxWithEndChars.push(i);
			}
		}

		const endSents = [0]; // End of the sentences
		while (true) {
			// Find x where x in (last, last + maxGloss]
			const last = endSents[endSents.length - 1];

			if (last + maxGloss > tokenStrs.length)
				break;

			// Clear out the previous ones
			const filteredEndChars = idxWithEndChars.filter(e => e > last);
			const targets = filteredEndChars.filter(e => e <= last + maxGloss);

			let target;
			if (targets.length === 0) {
				target = last + maxGloss;
			} else {
				target = Math.max(...targets);
			}

			endSents.push(target);
		}

		const lastTokenIndex = tokenStrs.length - 1;
		if (!endSents.includes(lastTokenIndex)) {
			endSents.push(lastTokenIndex);
		}

		return endSents.slice(1); // Exclude the first element
	}

	chunkizeForReannotation(reannotateBools, margin = 16, minMargin = 4) {
		// R: returns [(p0, e0), ...] for [p0+1:e0+1], ... (see reput_gloss)
		// TODO: also has to receive which ones are to be reannotated

		const chunks = [];

		// 1. Find the first occurrence of `TOKEN_TO_REANNOTATE`
		for (let i = 0; i < reannotateBools.length; i++) {
			const shouldReannotate = reannotateBools[i];
			if (!shouldReannotate)
				continue;

			// `i` indicates the token to be reannotated
			// Check if `i` is in the previous chunk
			if (chunks.length > 0) {
				const lastOne = chunks[chunks.length - 1][1];

				// Take care of the margin; this ensures that the context is included.
				if (i < lastOne - minMargin) {
					// Included in the last chunk; ignore this `i`
					continue;
				}
			}

			// Else: not included, make a new chunk
			let prevI = i - margin;
			if (prevI < -1) {
				prevI = -1; // The start point
			}

			// Now set the endI
			let endI = i + margin;
			// ...does it overflow?
			if (endI + 1 > reannotateBools.length) { // chunk: [prevI + 1 : endI + 1]
				// It overflowed; set the endI to the last one
				endI = reannotateBools.length - 1;
			}

			chunks.push([prevI, endI]);
		}

		return chunks;
	}
}

class GlossFetcher {
	constructor(dummy=false) {
		this.dummy = dummy;
	}

	fetchGloss(tokenStrs) {
		if (!this.dummy) {
			throw new Error("NotImplementedError");
		}

		// Dummy method
		const length = tokenStrs.length;
		return Array.from({ length }, (_, i) => [`dummy${i}`]);
	}

	tryFetchGloss(tokenStrs) {
		return this.fetchGloss(tokenStrs);
	}
}