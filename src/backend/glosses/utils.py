#Placeholder purpose functions

import string

def make_dummy_token(txt="txt", is_delimiter=False, gloss="gloss"):
	return {
		"txt": txt,
		"is_delimiter": is_delimiter,
		"gloss": gloss,
	}

def make_dummy_result(outstring):
	d_tokens = outstring.split()
	d_tokens = [
		make_dummy_token(t, False, f"{t}({len(t)})")
		for t
		in d_tokens
	]

	out = {
		"paragraph_delimiters": ['\n'],
		"paragraphs": [
			{
				"is_delimiter": is_delimiter,
				"token_delimiters": string.whitespace,
				"tokens": tokens,
			}
			for tokens, is_delimiter
			in zip(
				[
					d_tokens,
					[make_dummy_token('\n', True, None)],
					[make_dummy_token("DUMMYEND")],
				],
				[False, True, False],
			)
		]
	}

	return out