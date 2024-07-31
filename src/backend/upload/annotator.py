from .serializables import Corpus, Paragraph, Token

import itertools
import string
import re
from typing import List, Tuple

TOKEN_UNKNOWN = "!UNKNOWN"

class Annotator:
	def annotate(self, p: Paragraph, lang_from: str, lang_to: str, **kwargs):
		self.lang_from = lang_from
		self.lang_to = lang_to

		if not p.is_delimiter:
			if p.tokens != []:
				self.put_gloss(p)
			p.pstate = "ANNOTATED"

	def reannotate(self, p: Paragraph, lang_from: str, lang_to: str, target_tokens: List[str], **kwargs):
		self.lang_from = lang_from
		self.lang_to = lang_to

		if p.is_delimiter:
			return
		
		for i, t in enumerate(p.tokens):
			if i not in target_tokens:
				continue

			t.gloss = "reannotated_`{self.lang_from}`_`{self.lang_to}"
		
	def put_gloss(self, p: Paragraph):
		for token in p.tokens:
			if token.is_delimiter:
				continue
			token.gloss = f"dummygloss({token.txt})"

		p.annotator_info = f"dummy_`{self.lang_from}`_`{self.lang_to}`"
