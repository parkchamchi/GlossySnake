from .serializables import Corpus, Paragraph, Token

import itertools
import string
import re
from typing import List, Tuple

def tokenize(txt, delimiters: list) -> List[Tuple[str, bool]]:
	#Inclues the delimiters to the output list.
	#Returns [(token, is_delimiter)]

	pattern = '|'.join(map(re.escape, delimiters))
	tokens = re.split(f"({pattern})", txt)
	tokens = [(token, token in delimiters) for token in tokens if token != '']
	return tokens

class Parser:
	def divide_into_paragraphs(self, corpus, paragraph_delimiters=['\n'], **kwargs):
		original_txt = corpus.original_txt

		fragments = [original_txt]
		for delim in sorted(paragraph_delimiters, key=len):
			for i in len(fragments):
				fragments[i] = delim.join(fragments.split(delim))
			fragments = list(itertools.chain(*fragments))

		corpus.p_div_locs = list(itertools.accumulate([len(e) for e in fragments]))
		corpus.tokens = [
			Paragraph(
				pstate="DIVIDED", 
				original_text=f,
				is_delimiter=(f in paragraph_delimiters),
			)
			for f
			in fragments
		]
				
		"""
		#Characters that would be ideal for dividing paragraphs (that exceeds the max_len_per_p)
		endchars = ['.', '!', '?']

		original_txt = corpus.original_txt
		p_div_locs = [0] #End of the sentences

		#Indices whose ch is in `endchars`
		#TODO: optimize this (use regex)
		idx_w_endchars = []
		for idx, ch in enumerate(original_txt):
			if ch in endchars:
				idx_w_endchars.append(idx)

		while True:
			#Find x where x in (last, last+maxlen]
			last = p_div_locs[-1]

			upperlimit = last + max_len_per_p
			if upperlimit > len(original_txt):
				break

			targets = [e for e in idx_w_endchars if last < e <= upperlimit]

			if targets == []:
				target = upperlimit
			else:
				target = max(targets)
				
			p_div_locs.append(target)

		p_div_locs = p_div_locs[1:] + [len(original_txt)-1]
		
		corpus.p_div_locs = p_div_locs
		corpus.tokens = [
			Paragraph(
				pstate="DIVIDED", 
				original_text=original_txt[
					p_div_locs[i]
					: p_div_locs[i+1]
				]
			)
			for i
			in range(len(p_div_locs)-1)
		]
		"""

	def parse_paragraph(paragraph, token_delimiters=string.whitespace ,**kwargs):
		if paragraph.is_delimiter:
			paragraph.tokens = [Token(txt=paragraph.original_text, is_delimiter=True)]
		else:
			paragraph.tokens = [
				Token(txt, is_delimiter)
				for txt, is_delimiter
				in tokenize(paragraph.original_text)
			]