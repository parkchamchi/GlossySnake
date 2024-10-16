//Follows chatgpt_annoatator.py

export { ChatgptAnnotator };

import { Annotator, TOKEN_UNKNOWN } from "./annotator.js";
import { AnnotatorInfo } from "./serializables.js";
import { sharedState } from "./sharedState.js";

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
	constructor(annotator_name) {
		super();
		this.annotator_name = annotator_name;
		this.glossFetcher = new ChatgptGlossFetcher(true);
	}

	async put_gloss(p) {
		// First, get the token strings. This ignores the delimiters.
		const tokensWithoutDelimiters = p.tokens.filter(token => !token.is_delimiter);
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
			let chunkGlosses = await this.glossFetcher.tryFetchGloss(chunkStrs);
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

	async reput_gloss(p, target_tokens) {
		// R: Initially taking the `put_gloss` as a backbone... TODO: generalize these
		console.log("reput_gloss: target_tokens:", target_tokens);

		const tokensWithoutDelimiters = [];
		const reannotateBools = []; // [(str, bool), ...]
		const targetTokenIdxs = []; // Not counting the delimiters
		let indexNotDelimiter = 0;

		// Iterate over the paragraph tokens
		for (let i = 0; i < p.tokens.length; i++) {
			const token = p.tokens[i];
			if (token.is_delimiter) {
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
			const fetchedGlosses = await this.glossFetcher.tryFetchGloss(chunkStrs, chunkGlosses);

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

	chunkize(tokenStrs) {
		// Returns the end indices
		const endChars = ['.', '!', '?'];
		const maxGloss = sharedState.maxGloss;

		// Find indices of tokens that contain end characters
		let idxWithEndChars = [];
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

			//console.log(last, maxGloss, last+maxGloss, tokenStrs.length)
			if (last + maxGloss > tokenStrs.length)
				break;

			idxWithEndChars = idxWithEndChars.filter(e => e > maxGloss);
			let targets = idxWithEndChars.filter(e => e <= maxGloss);

			let target;
			if (targets.length === 0)
				target = last + maxGloss;
			else
				target = Math.max(...targets);

			endSents.push(target);
		}

		endSents.shift();
		const lastTokenIndex = tokenStrs.length - 1;
		if (!endSents.includes(lastTokenIndex)) {
			endSents.push(lastTokenIndex);
		}

		return endSents; // Exclude the first element
	}

	chunkizeForReannotation(reannotateBools, margin=16, minMargin=4) {
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

	async fetchGloss(tokenStrs) {
		if (!this.dummy) {
			throw new Error("NotImplementedError");
		}

		// Dummy method
		const length = tokenStrs.length;
		return Array.from({ length }, (_, i) => [`dummy${i}`]);
	}

	async tryFetchGloss(tokenStrs) {
		return await this.fetchGloss(tokenStrs);
	}
}

class ChatgptGlossFetcher extends GlossFetcher {	
	async tryFetchGloss(tokenStrs, reannotationGlossStrs=null) {
		console.log(`Trying to fetch ${tokenStrs.length} glosses`);

		const innerRetry = sharedState.innerRetry;
		const outerRetry = sharedState.outerRetry;

		const reannotation = Array.isArray(reannotationGlossStrs);
		let query;
		if (reannotation) {
			console.log(`Reannotating: ${reannotationGlossStrs}`);

			query = this.makeQueryReannotation(tokenStrs, reannotationGlossStrs);
		}
		else {
			query = this.makeQuery(tokenStrs);
		}

		const origMessages = [
			...this.getChat(reannotation),
			{"role": "user", "content": query},
		];
		this.lastResText = "";

		for (let tryI = 0; tryI < outerRetry; tryI++) {
			console.log(`----------Try A${tryI}`);
			let messages = [...origMessages];

			for (let tryJ = 0; tryJ < innerRetry; tryJ++) {
				console.log(`--------------------Try B${tryJ}`);

				try {
					return await this.fetchGloss(tokenStrs, messages, reannotationGlossStrs);
				} catch (exc) {
					console.log(`Exception: ${exc}. Retrying.`);
					console.log(`lastResText: ${this.lastResText}`);
					messages = [
						...messages,
						{"role": "assistant", "content": this.lastResText},
						{"role": "user", "content": `
							Got an error, probably by a malformatted result.
							\`\`\` ${exc} \`\`\`
						`},
					];
				}
			}
		}

		throw Error(`Failed after ${outerRetry}*${innerRetry} retries.`);
	}

	async fetchGloss(tokenStrs, messages, reannotationGlossStrs=false) {
		console.log(`Fetching ${tokenStrs.length} glosses`);

		console.log("messages:", messages);

		return fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"Authorization": `Bearer ${sharedState.openaiApiKey}`, //TODO
			},
			body: JSON.stringify({
				"model": sharedState.openaiModel,
				messages,
			})
		})
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			const tokenUsage = json.usage.total_tokens;
			console.log("token usage:", tokenUsage);

			const content = json.choices[0].message.content;
			this.lastResText = content;

			//console.log(content); //```0: ... || ...```

			let parsed = this.parseRes(content);

			//Check completeness
			const parsedLength = Object.keys(parsed).length;
			if (parsedLength != tokenStrs.length) {
				console.log("parsed:", parsed)
				//console.warn(`${tokenStrs.length} lines expected but got ${parsedLength} lines.`);
			}

			//Check validity
			parsed = this.validateRes(tokenStrs, parsed, reannotationGlossStrs);

			return parsed;
		});
	}

	makeQuery(tokenStrs) {
		let q = "";
		for (const [i, t] of tokenStrs.entries())
			q += `${i}: ${t}\n`;

		return q;
	}

	makeQueryReannotation(tokenStrs, tokenGlosses) {
		let q = "";
		for (const [i, [txt, gloss]] of tokenStrs.map((t, i) => [i, [t, tokenGlosses[i]]])) {
			q += `${i}: ${txt} ${GLOSS_DELIMITER} ${gloss}\n`;
		}
		return q;
	}

	parseRes(res) {
		const origRes = res;

		try {
			// Discard the codeblock
			if (res.includes("```")) {
				res = res.split("```")[1];
			}
			else if (!res.includes("0:")) {
				throw new Error("The first line (`0: ...`) could not be found. Reformat the reply and answer again.");
			} else {
				res = res.substring(res.indexOf("0:"));
			}
		
			// Split lines
			let lines = res.split('\n').filter(line => line.trim() !== "");
		
			// Parse the linenum
			//lines = lines.map(line => line.split(':', 2));
		
			// Parse the glosses
			let parsedRes = {};
			lines.forEach(line => {
				//const lineNum = parseInt(line[0].trim(), 10);
				//const glosses = line[1].split(GLOSS_DELIMITER).map(g => g.trim()).filter(g => g !== "");
				const [lineNumStr, glossStr] = line.match(/^(\d+):\s*(.*)$/).slice(1, 3);
				const lineNum = parseInt(lineNumStr.trim(), 10);
				const glosses = glossStr.split(GLOSS_DELIMITER).map(g => g.trim()).filter(g => g !== "");
				parsedRes[lineNum] = glosses;
			});
		
			return parsedRes;
		} catch (error) {
			console.error(origRes);
			throw new Error("Could not parse the output. The output should be in the codeblock (``` 0: ... ```) and additional notes are not needed.");
		}
	}

	validateRes(tokenStrs, res, reannotationGlossStrs) {
		const reannotation = Array.isArray(reannotationGlossStrs);

		console.log("token_strs:", tokenStrs);
		console.log("res:", res);
		for (let i = 0; i < tokenStrs.length; i++) {
			const origTxt = tokenStrs[i];
			const [retI, resValue] = Object.entries(res)[i];

			if (!reannotation && i !== parseInt(retI)) {
				throw new Error(`\`${retI}:\` line not found.`);
			}

			if (resValue.length <= 0) {
				throw new Error(`Empty line: ${i}.`); // Not likely.
			}
			if (resValue.length === 1) {
				// gloss not returned; just put !UNKNOWN
				resValue.push(TOKEN_UNKNOWN);
			}

			const [retTxt, retGloss] = resValue.slice(0, 2);
			//console.log(i, retI, origTxt, retTxt, retGloss);

			// TODO: reannotation case
			if (!reannotation && !looseComparison(origTxt, retTxt)) {
				throw new Error(`Expected \`${i}: ${origTxt} ||\` but incorrectly got \`${i}: ${retTxt} ||\`. The pair of the number and the text (${i}, ${origTxt}) has to be exact. Rewrite including \`${i}: ${origTxt} ||\`.`);
			}
		}

		// Pass 2: iter. by orig token_str
		let outres = [];
		let reannotationIndices;
		if (reannotation) {
			// orig_gloss_strs_copy = reannotation_gloss_strs.slice();
			console.log("reannotationGlossStrs:", reannotationGlossStrs);
			reannotationIndices = reannotationGlossStrs.map((e, i) => e === TOKEN_TO_REANNOTATE ? i : -1).filter(i => i !== -1);
			console.log("reannotationIndices", reannotationIndices);

			// TODO: why does this happen (likely chunking error)
			if (reannotationIndices.length === 0) {
				console.log("TODO: reannotation_indices == []");
				return Array(tokenStrs.length).fill(TOKEN_TO_IGNORE);
			}
		}

		for (let i = 0; i < tokenStrs.length; i++) { // Not this `i`
			let g = null;

			if (reannotation && !reannotationIndices.includes(i)) {
				g = TOKEN_TO_IGNORE;
			} else {
				if (!res.hasOwnProperty(i)) {
					g = TOKEN_UNKNOWN;
				} else {
					g = res[i][1];
				}
			}

			outres.push(g);
		}

		return outres;
	}

	getChat(reannotation) {
		let content;
		let glossInsts;

		const fullPrompt = sharedState.fullPrompt;

		if (!fullPrompt) {
			glossInsts = "English translation";

			if (!reannotation) {
				content = `
					Parse this corpus (Interlinear gloss). 
					${glossInsts}
				`;
			}
			else {
				content = `Reannotate the input. A series of words will be given, which form a part of sentences. Some lines will have \`${TOKEN_TO_REANNOTATE}\` on its right side, which is to be re-annotated. Return only lines with \`${TOKEN_TO_REANNOTATE}\`, with ${TOKEN_TO_REANNOTATE} itself replaced following the context.`;
			}

			return [
				{"role": "system", "content": content}
			];
		}
		else { //fullPrompt
			glossInsts = `
				The gloss is expected to be a translation of the token.
				The grammatical elements need not be specified
				but can be naturally expressed
				(e.g. taking a genetive word as \`of ...\`)
			`;
			const example = [
				["Ceux", "Those"],
				["que", "whom"],
				["vous", "you"],
				["oubliez", "forget"],
				["ne", "not"],
				["vous", "you"],
				["oublieront", "will forget"],
				["pas", "not"]
			];	
			const newline = '\n';

			if (!reannotation) {
				const lenTokens = example.length;

				return [
					{ role: "system", content: `
						Parse this corpus (Interlinear gloss).
		
						The user will tokenize and enumerate the raw input, as:
							\`Je suis.\`
						to
						\`\`\`
							0: Je
							1: suis.
						\`\`\`
		

						You are to respond with 
						\`\`\`
							i: original_word ${GLOSS_DELIMITER} gloss
						\`\`\`.
						Here, the glosses are delimited with \`${GLOSS_DELIMITER}\`.
						No line should be skipped. Otherwise it will raise an error.
		
						For example, if the gloss should be then translation to English,
						the response shall be:
						\`\`\`
							0: Je ${GLOSS_DELIMITER} I
							1: suis. ${GLOSS_DELIMITER} am.
						\`\`\`
		
						Since the output text is to be processed by other program,
						the structure of the output is important.
		
						The numbers should correspond to the original token.
						No line shall be omitted!
						\`\`\`
							0: Je
							1: le
							2: sais.
						\`\`\`
						\`\`\`
							0: Je ${GLOSS_DELIMITER} I
							1: le ${GLOSS_DELIMITER} it
							2: sais. ${GLOSS_DELIMITER} know
						\`\`\`
		
						The output should only consist of the gloss block (\`\`\`...\`\`\`) and any other notes will be ignored.
					` },
					{ role: "user",	content: `
						e.g. \`i: "original_word ${GLOSS_DELIMITER} gloss\`
						Since there are ${lenTokens} tokens in the input, ${lenTokens} lines of output is expected.
						i.e. the last line be \`${lenTokens - 1}: ...\`
		
						\`gloss\` is:
						${glossInsts}
		
						\`\`\`
						${example.map((t, i) => `${i}: ${t[0]}`).join(newline)}
						\`\`\`
					` },
					{ role: "assistant", content: `
						\`\`\`
						${example.map((t, i) => `${i}: ${t[0]} ${GLOSS_DELIMITER} ${t[1]}`).join(newline)}
						\`\`\`
					` }
				];
			}
			else {
				const toReannotates = [1, 2];

				return [
					{ role: "system", content: `
						Re-annotate this corpus (Interlinear gloss).
		
						The user will tokenize and enumerate the raw input, as:
						\`\`\`
							0: als ${GLOSS_DELIMITER} as
							1: dieses ${GLOSS_DELIMITER} ${TOKEN_TO_REANNOTATE}
							2: Herz. ${GLOSS_DELIMITER} heart.
						\`\`\`
						You have to find lines with \`${TOKEN_TO_REANNOTATE}\` and give new translations, as:
						\`\`\`
							1: dieses ${GLOSS_DELIMITER} this
						\`\`\`
						Here, \`${TOKEN_TO_REANNOTATE}\` was replaced by your reannotation.
		
						The structure of the output is important and no line shall be omitted.
					` },
					{ role: "user",	content: `
						e.g. \`i: "original_word ${GLOSS_DELIMITER} gloss\`
						Since there are ${toReannotates.length} \`${TOKEN_TO_REANNOTATE}\` tokens in the input, ${toReannotates.length} lines of output are expected.
						i.e. the last line be \`${toReannotates[toReannotates.length - 1]}: ...\`
		
						\`gloss\` is:
						${glossInsts}
		
						\`\`\`
						${example.map((t, i) => `${i}: ${t[0]} ${GLOSS_DELIMITER} ${i in toReannotates ? TOKEN_TO_REANNOTATE : t[1]}`).join(newline)}
						\`\`\`
					` },
					{ role: "assistant", content: `
						\`\`\`
						${example.filter((t, i) => toReannotates.includes(i)).map((t, i) => `${i}: ${t[0]} ${GLOSS_DELIMITER} ${t[1]}`).join(newline)}
						\`\`\`
					` }
				];
			}
		}
	}
}