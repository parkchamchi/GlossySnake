import warnings

class Serializable:
	def __repr__(self):
		return f"<{type(self).__name__} {str(self)}>"
	
	@staticmethod
	def fromdict(d):
		raise NotImplementedError("Use the subclasses")

	def todict(self):
		raise NotImplementedError("Use the subclasses")

class Token(Serializable):
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
	
	def todict(self):
		return self.__dict__.copy()

	@staticmethod
	def fromdict(d):
		toret = Token(None, None, None)
		toret.__dict__ = d
		return toret

"""
class Pstate(Enum):
	PLAIN = "PLAIN"
	DIVIDED = "DIVIDED"
	PARSED = "PARSED"
	ANNOTATED = "ANNOTATED"
"""
ALLOWED_PSTATES = ["PLAIN", "DIVIDED", "PARSED", "ANNOTATED"]

class AnnotatorInfo(Serializable):
	def __init__(self, annotator_name=None, lang_from=None, lang_to=None):
		self.annotator_name = annotator_name
		self.lang_from = lang_from
		self.lang_to = lang_to

	def todict(self):
		return self.__dict__.copy()

	@staticmethod
	def fromdict(d):
		toret = AnnotatorInfo(None, None, None)
		toret.__dict__ = d
		return toret

class Paragraph(Serializable):
	def __init__(self, pstate: str, tokens: list[Token], is_delimiter: bool, token_delimiters: str, annotator_info: str, original_text: str, annotator_info_obj: AnnotatorInfo=AnnotatorInfo()):
		#Check if `pstate` is valid
		if pstate not in ALLOWED_PSTATES:
			fallback = "ANNOTATED"
			warnings.warn(f"Paragraph.__init__(): Got unknown `pstate` '{pstate}`. Falling back to '{fallback}'.")
			assert fallback in ALLOWED_PSTATES
			pstate = fallback
		self.pstate = pstate

		if tokens is None:
			tokens = []
		self.tokens = tokens
		self.is_delimiter = is_delimiter
		self.token_delimiters = token_delimiters

		self.annotator_info = annotator_info #obsolete
		self.original_text = original_text

		self.annotator_info_obj = annotator_info_obj
		
	def __str__(self):
		if self.is_delimiter:
			l, r = '&', '&'
		else:
			l, r = '[', ']'

		tokens_str = ', '.join([str(t) for t in self.tokens])
		return f"<P {l}{tokens_str}{r}>"
	
	def todict(self):
		d =  self.__dict__.copy()
		d["tokens"] = [t.todict() for t in self.tokens]
		if d["annotator_info_obj"]:
			d["annotator_info_obj"] = self.annotator_info_obj.todict()
		return d

	@staticmethod
	def fromdict(d):
		toret = Paragraph("PLAIN", [], True, "", "", "")
		dcopy = d.copy()
		dcopy["tokens"] = [Token.fromdict(tokend) for tokend in dcopy["tokens"]]
		if dcopy["annotator_info_obj"]:
			dcopy["annotator_info_obj"] = AnnotatorInfo.fromdict(dcopy["annotator_info_obj"])
		toret.__dict__ = dcopy
		return toret

class Corpus(Serializable):
	def __init__(self,
		paragraphs: list[Paragraph], paragraph_delimiters: list[str],
		original_text: str, p_div_locs: list[int]):

		self.paragraphs = paragraphs
		self.paragraph_delimiters = paragraph_delimiters
		self.original_text = original_text
		self.p_div_locs = p_div_locs
		
	def __str__(self):
		return ', '.join([str(p) for p in self.paragraphs])
	
	@staticmethod
	def init_with_txt(original_text):
		return Corpus(
			paragraphs=[],
			paragraph_delimiters=None,
			original_text=original_text,
			p_div_locs=[],
		)
	
	@staticmethod
	def fromdict(d):
		toret = Corpus.init_with_txt(None)
		dcopy = d.copy()
		dcopy["paragraphs"] = [Paragraph.fromdict(pd) for pd in dcopy["paragraphs"]]
		toret.__dict__ = dcopy
		return toret
	
	def todict(self):
		d = self.__dict__.copy()
		d["paragraphs"] = [p.todict() for p in self.paragraphs]
		return d