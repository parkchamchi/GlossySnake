from .serializables import Corpus, Paragraph, Token

import itertools
import string
import re
from typing import List, Tuple

def get_dummy_gloss(token: Token):
	return f"dummygloss({token.txt})"

class Annotator:
	def annotate(self, p: Paragraph, lang_from: str, lang_to: str, **kwargs):
		if not p.is_delimiter:
			for token in p.tokens:
				if token.is_delimiter:
					continue
				token.gloss = get_dummy_gloss(token)

		p.pstate = "ANNOTATED"
		p.annotator_info = f"dummy_`{lang_from}`_`{lang_to}`"
		