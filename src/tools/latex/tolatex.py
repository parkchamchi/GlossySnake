import os

from pylatex import (
	Document,
	Section,
	Subsection,
	Command,
	Package,
)
from pylatex.utils import (
	italic,
	NoEscape,
)
from pylatex.section import (
	Paragraph,
)

def normalize_word(word):
	for f, t in [
		("aͤ", "ä"),
		("oͤ", "ö"),
		("uͤ", "ü"),
		("ſ", "s"),
		("ϱ", "ρ"),
		("ϰ", "κ"),
		("\u0315", "’"),
		('{', '*'),
		('}', '*'),
	]:
		word = word.replace(f, t)
		
	return word

def get_doc(corpus, corpus_title, greek=True, fontspec=False):
	geometry_options = {"margin": "2cm"}
	doc = Document(geometry_options=geometry_options)
	doc.packages.append(Package("expex"))

	if greek:
		doc.packages |= [
			Package("fontenc", ["LGR", "T1"]),
			Package("amsmath"),
			Package("textalpha"),
			Package("babel", ["greek", "english"]),
		]
	if fontspec:
		doc.packages |= [
			Package("fontspec"),
		]

	doc.append(Command("title", (corpus_title)))
	#doc.append(Command("author", "Chanjin Park a.k.a. \"Chamchi\" (parkchamchi@gmail.com)"))
	doc.append(Command("maketitle"))

	with doc.create(Section("On GlossySnake")):
		introduction = r"""
			A \LaTeX{} Proof-of-Concept of the GlossySnake project.
			By the nature of the machine-glossing, the inaccurate and malformatted glossing is expected.
		"""

		doc.append(NoEscape(introduction.replace('\n', '').replace('\t', ' ').strip()))

	#doc.append(Command("lingexbreakpenalty=10000"))

	with doc.create(Section(corpus_title)):
		for p in corpus["paragraphs"]:
			#if p["is_delimiter"]:
			#	continue

			#with doc.create(Paragraph("")):
			txt_s = []
			gloss_s = []

			#Ignoring delimters.
			for t in p["tokens"]:
				if t["is_delimiter"]:
					if '\n' in t["txt"]:
						txt_s.append('+')
						#gloss_s.append('+')
					continue
				
				txt = t["txt"]
				txt = normalize_word(txt)
				txt_s.append(txt)

				gloss = t["gloss"]
				if gloss == "!UNKNOWN":
					gloss = "-"
				gloss = normalize_word(gloss)
				gloss_s.append(gloss)

			if [e for e in txt_s if e.strip()] == []:
				continue

			#expex
			#with doc.create(Subsection("")):
			doc.append(Command("exdisplay"))
			"""
			doc.append(Command("begingl", None, {
				"everygla": '',
				"everyglb": r"\tt",
				"glwordalign": "center",
			}))
			"""
			doc.append(NoEscape(
				r"\begingl["
				r"everygla=\LARGE,everyglb=\tt,"
				r"glwordalign=center,extraglskip=0.75em,aboveglbskip=0.25em,"
				r"glbreaking,glspace=0.75em"
				r"]"
			))

			doc.append(Command("gla " + " ".join(['{'+e+'}' for e in txt_s]) + " // "))
			doc.append(Command("glb " + " ".join(['{'+e+'}' for e in gloss_s]) + " // "))
			#doc.append(Command("glft // "))

			doc.append(Command("endgl"))
			doc.append(Command("xe"))
			
	return doc

import json

def create_pdf(corpus_filename, greek, compiler, fontspec):
	with open(corpus_filename, "rt", encoding="utf-8") as fin:
		corpus_text = fin.read()
	corpus = json.loads(corpus_text)

	corpus_title = os.path.basename(corpus_filename).split('.')[0]

	doc = get_doc(corpus, corpus_title, greek=greek, fontspec=fontspec)

	os.makedirs("outs/", exist_ok=True)
	doc.generate_pdf("outs/" + corpus_title, clean_tex=False, compiler=compiler)

if __name__ == "__main__":
	import argparse

	parser = argparse.ArgumentParser()

	parser.add_argument("corpus_filename")
	parser.add_argument("--no-greek",
		help="omit packages for rendering Greek texts",
		action="store_true",
	)
	parser.add_argument("--compiler",
		help="latexmk, pdflatex, etc.",
		default=None,
	)
	parser.add_argument("--fontspec",
		action="store_true",
	)

	args = parser.parse_args()

	create_pdf(args.corpus_filename, 
		greek=not args.no_greek, 
		compiler=args.compiler,
		fontspec=args.fontspec,
	)
