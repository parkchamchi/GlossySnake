import warnings

class Token:
	def __init__(self, txt: str, gloss: str, is_delimiter: bool):
		self.txt = txt
		self.is_delimiter = is_delimiter
		self.gloss = gloss

	def __str__(self):
		if self.is_delimiter:
			l, r = '$', '$'
		else:
			l, r = '<', '>'

		out = f"{repr(self.txt)[1:-1]}"
		if self.gloss is not None:
			out += f", {repr(self.gloss)[1:-1]}"
		return f"{l}{out}{r}"
	
	def __repr__(self):
		return f"<Token {str(self)}>"
	
	def todict(self):
		return {
			"txt": self.txt,
			"is_delimiter": self.is_delimiter,
			"gloss": self.gloss,
		}
	
	@staticmethod
	def fromdict(d):
		txt = d["txt"]
		is_delimiter = d["is_delimiter"]
		gloss = d["gloss"]

		t = Token(txt, is_delimiter)
		t.gloss = gloss
		return t
	
"""
class Pstate(Enum):
	PLAIN = "PLAIN"
	DIVIDED = "DIVIDED"
	PARSED = "PARSED"
	ANNOTATED = "ANNOTATED"
"""
ALLOWED_PSTATES = ["PLAIN", "DIVIDED", "PARSED", "ANNOTATED"]

class Paragraph:
	def __init__(self, pstate: str, tokens: list[Token], is_delimiter: bool, token_delimiters: str):
		#Check if `pstate` is valid
		if pstate not in ALLOWED_PSTATES:
			fallback = "ANNOTATED"
			warnings.warn(f"Paragraph.__init__(): Got unknown `pstate` '{pstate}`. Falling back to '{fallback}'.")
			assert fallback in ALLOWED_PSTATES
			pstate = fallback
		self.pstate = pstate

		self.tokens = tokens
		self.is_delimiter = is_delimiter
		self.token_delimiters = token_delimiters

		self.annotator_info = ""
		
	def __str__(self):
		if self.is_delimiter:
			l, r = '&', '&'
		else:
			l, r = '[', ']'

		tokens_str = ', '.join([str(t) for t in self.tokens])
		return f"{l}{tokens_str}{r}"
	
	def __repr__(self):
		return f"Paragraph<{str(self)}>"
	
	def todict(self):
		return {
			"is_delimiter": self.is_delimiter,
			"token_delimiters": self.token_delimiters,
			"tokens": [t.todict() for t in self.tokens],
		}
	
	@staticmethod
	def fromdict(d):
		is_delimiter = d["is_delimiter"]
		token_delimiters = d["token_delimiters"]
		tokens = [Token.fromdict(d) for d in d["tokens"]]

		p = Paragraph(None, is_delimiter, token_delimiters, prepared_tokens=tokens)
		return p


class Corpus:
	def __init__(self,
		paragraphs: list[Paragraph], paragraph_delimiters: list[str],
		original_txt: str, p_div_locs: list[int], task_ids: list[str]):

		self.paragraphs = paragraphs
		self.paragraph_delimiters = paragraph_delimiters
		self.original_txt = original_txt
		self.p_div_locs = p_div_locs
		self.task_ids = task_ids
		
	def __str__(self):
		return ', '.join([str(p) for p in self.paragraphs])

	def todict(self):
		return {
			"paragraph_delimiters": self.paragraph_delimiters,
			"paragraphs": [p.todict() for p in self.paragraphs],
		}
	
	@staticmethod
	def fromdict(d):
		paragraph_delimiters = d["paragraph_delimiters"]
		paragraphs = [Paragraph.fromdict(p) for p in d["paragraphs"]]
		
		c = Corpus(None, paragraph_delimiters, paragraphs)
		return c
	
	@staticmethod
	def init_with_txt(original_txt):
		return Corpus(
			paragraphs=[],
			paragraph_delimiters=None,
			original_txt=original_txt,
			p_div_locs=[],
			task_ids=[],
		)