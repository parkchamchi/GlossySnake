from .serializables import Corpus, Paragraph, Token

import itertools
import string
import re
from typing import List, Tuple

TOKEN_UNKNOWN = "!UNKNOWN"

class Annotator:
	def __init__(self):
		self.annotator_name = "DUMMYGLOSS"

	def annotate(self, p: Paragraph, lang_from: str, lang_to: str, **kwargs):
		self.lang_from = lang_from
		self.lang_to = lang_to

		if not p.is_delimiter:
			if p.tokens != []:
				self.put_gloss(p)
			p.pstate = "ANNOTATED"

			p.annotator_info_obj.lang_from = self.lang_from
			p.annotator_info_obj.lang_to = self.lang_to
			p.annotator_info_obj.annotator_name = self.annotator_name

	def reannotate(self, p: Paragraph, lang_from: str, lang_to: str, target_tokens: List[str], **kwargs):
		self.lang_from = lang_from
		self.lang_to = lang_to

		if p.is_delimiter:
			return
		
		self.reput_gloss(p, target_tokens)
		
	def put_gloss(self, p: Paragraph):
		for token in p.tokens:
			if token.is_delimiter:
				continue
			token.gloss = f"{self.annotator_name}({token.txt})"

		p.annotator_info = f"dummy_`{self.lang_from}`_`{self.lang_to}`" #obsolete
		
	def reput_gloss(self, p: Paragraph, target_tokens: List[int]):
		if target_tokens is not None and target_tokens != []:
			assert type(target_tokens[0]) == int #a test code

		for i, t in enumerate(p.tokens):
			if i not in target_tokens:
				continue

			t.gloss = f"{self.annotator_name}_reannotated_`{self.lang_from}`_`{self.lang_to}`"