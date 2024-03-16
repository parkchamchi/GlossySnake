import argparse
import string
import re
from typing import List, Tuple
import json

#TOKEN_IDENTICAL = "!IDENTICAL"
#TOKEN_NULL = "!NULL"
TOKEN_UNKNOWN = "!UNKNOWN"

def tokenize(txt, delimiters: list) -> List[Tuple[str, bool]]:
	#Inclues the delimiters to the output list.
	#Returns [(token, is_delimiter)]

	pattern = '|'.join(map(re.escape, delimiters))
	tokens = re.split(f"({pattern})", txt)
	tokens = [(token, token in delimiters) for token in tokens if token != '']
	return tokens

class Token:
	def __init__(self, txt, is_delimiter, gloss=None):
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
	
	def contains_gloss(self):
		return self.gloss is not None

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
			
class Paragraph:
	def __init__(self, txt, is_delimiter, token_delimiters=string.whitespace, prepared_tokens=None):
		self.is_delimiter = is_delimiter
		self.token_delimiters = token_delimiters
		
		assert (txt is None) != (prepared_tokens is None)
		if txt is not None:
			if self.is_delimiter:
				self.tokens = [Token(txt, True)]
			else:
				self.tokens = [
					Token(token, is_delimiter)
					for token, is_delimiter
					in tokenize(txt, self.token_delimiters)
				]
		else:
			self.tokens = prepared_tokens

	def get_tokens_wo_delimiters(self):
		return [t for t in self.tokens if not t.is_delimiter]
	
	def __str__(self):
		if self.is_delimiter:
			l, r = '&', '&'
		else:
			l, r = '[', ']'

		tokens_str = ', '.join([str(t) for t in self.tokens])
		return f"{l}{tokens_str}{r}"
	
	def __repr__(self):
		return f"Paragraph<{str(self)}>"
	
	def sample(self):
		domain = self.tokens[:min(10, len(self.tokens))]
		return ''.join([t.txt for t in domain])
	
	def contains_gloss(self):
		return any([t.contains_gloss() for t in self.tokens])
	
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
	def __init__(self, txt, paragraph_delimiters=["\n"], prepared_paragraphs=None):
		self.paragraph_delimiters = paragraph_delimiters
		
		assert (txt is None) != (prepared_paragraphs is None)
		if txt is not None:
			self.paragraphs = [
				Paragraph(paragraph, is_delimiter)
				for paragraph, is_delimiter
				in tokenize(txt, self.paragraph_delimiters)
			]
		else:
			self.paragraphs = prepared_paragraphs

	def get_paragraphs_wo_delimiters(self):
		return [p for p in self.paragraphs if not p.is_delimiter]

	def __str__(self):
		return ', '.join([str(p) for p in self.paragraphs])
	
	def contains_gloss(self):
		return any([p.contains_gloss() for p in self.paragraphs])
	
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

class GlossFetcher:
	def __init__(self, dummy=False):
		self.dummy = dummy

	def fetch_gloss(self, token_strs: List[str]) -> List[List[str]]:
		if not self.dummy:
			raise NotImplementedError()
		
		#Dummy method
		length = len(token_strs)
		return [[f"dummy{i}"] for i in range(length)]

class GlossEmbedder:
	def __init__(self, gloss_fetcher: GlossFetcher, max_gloss_per_req=80):
		self.gloss_fetcher = gloss_fetcher
		self.max_gloss_per_req = max_gloss_per_req

	def embed(self, paragraph: Paragraph):
		tokens_wo_delimiters = paragraph.get_tokens_wo_delimiters()
		token_strs = [t.txt for t in tokens_wo_delimiters]

		chunks = self.chunckize(token_strs)
		print(f"Chunks: {chunks}")

		glosses = []
		previ = -1
		for endi in chunks:
			print(f"[{previ+1}:{endi+1}] out of {len(token_strs)} (len: {endi-previ})")
			chunk_strs = token_strs[previ+1:endi+1]
			chunk_glosses = self.gloss_fetcher.try_fetch_gloss(chunk_strs)
			glosses += chunk_glosses

			previ = endi
			print(f"Chunk: {chunk_glosses} (len: {len(chunk_glosses)})")
	
		for token, gloss in zip(tokens_wo_delimiters, glosses):
			token.gloss = gloss

	def chunckize(self, token_strs):
		#Returns the end indices

		endchars = ['.', '!', '?']
		
		#idx_w_endchars = [t for t in token_strs if any(map(lambda ch: ch in t, endchars))]
		idx_w_endchars = []
		for i, token_str in enumerate(token_strs):
			if any(map(lambda ch: ch in token_str, endchars)):
				idx_w_endchars.append(i)
		
		end_sents = [0] #End of the sentences
		while True:
			#Find x where x in (last, last+maxgloss]
			last = end_sents[-1]
			maxgloss = self.max_gloss_per_req

			if (last + maxgloss) > len(token_strs):
				break

			idx_w_endchars = [e for e in idx_w_endchars if e > last] #Clear out the previous ones
			targets = [e for e in idx_w_endchars if e <= maxgloss]

			if targets == []:
				target = last + maxgloss
			else:
				target = max(targets)
				
			end_sents.append(target)

		end_sents = end_sents[1:] + [len(token_strs)-1]
		return end_sents

if __name__ == "__main__":
	parser = argparse.ArgumentParser()

	parser.add_argument("input",
		help="the input file"
	)

	default_paragraph_delimiter = "\\n"
	parser.add_argument("-p", "--paragraph_delimiters",
		help=' '.join([
			"the delimiters for the paragraphs.",
			"use '\\n' for prose and '\\n\\n' for poems.",
			"delimit them with the backtick `",
			"SHOULD BE ASCII.",
			f"defaults to {default_paragraph_delimiter}."
		]),
		default=default_paragraph_delimiter,
	)

	parser.add_argument("-j", "--jsonname",
		help="the filename of the json file",
		default="tmp/out.json",
	)

	parser.add_argument("-m", "--manual",
		help="control with instructions",
		action="store_true",
	)

	parser.add_argument("-t", "--trained",
		help="use the pretrained model",
		action="store_true",
	)

	args = parser.parse_args()

	print(f"input: {args.input}")

	paragraph_delimiters = args.paragraph_delimiters.encode("ascii").decode("unicode_escape")
	paragraph_delimiters = paragraph_delimiters.split('`')

	#Read
	with open(args.input, "rt", encoding="utf-8") as fin:
		txt = fin.read()

	if args.input.endswith("json"):
		d = json.loads(txt)
		corpus = Corpus.fromdict(d)
	else:
		corpus = Corpus(txt, paragraph_delimiters=paragraph_delimiters)

	print(len(corpus.paragraphs))

	def save_json():
		with open(args.jsonname, "wt", encoding="utf-8") as fout:
			json.dump(corpus.todict(), fout, indent='\t')
	save_json()

	from chatgpt_glossfetcher import ChatgptGlossFetcher

	gloss_fetcher = ChatgptGlossFetcher(use_pretrained_model=args.trained, ignore_incomplete_res=True)
	gloss_embedder = GlossEmbedder(gloss_fetcher)

	for p in corpus.get_paragraphs_wo_delimiters():
		print("\n\n")
		print('*'*64)
		print(p.sample())

		contains_gloss = p.contains_gloss()
		print(f"contains_gloss: {contains_gloss}")

		if args.manual:
			userinput = input("Embed? (Y/n): ")
			skip = (userinput.upper() != 'Y')
		else:
			skip = contains_gloss

		if skip:
			print("Skipping.")
			continue

		gloss_embedder.embed(p)
		print(p)
		save_json()