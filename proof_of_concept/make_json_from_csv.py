from intergloss import Corpus, Paragraph, Token

import csv
import json
import argparse
import os

delimiter = '|'
should_break_lines = False

parser = argparse.ArgumentParser()

parser.add_argument("--input",
	help="the input file",
)

parser.add_argument("--input_dir",
	help="the input dir.",
)

args = parser.parse_args()

if args.input_dir is not None:
	csvs = [
		os.path.join(args.input_dir, fname)
		for fname
		in os.listdir(args.input_dir)
		if fname.endswith(".csv")
	]
elif args.input is not None:
	csvs = [args.input]
else:
	raise RuntimeError("One of `--input` or `--input_dir` should be given.")

for input in csvs:
	print(f"On {input}")
	lines = []
	line = []

	with open(input, "rt", encoding="utf-8", newline='') as fin:
		reader = csv.reader(fin, delimiter=delimiter, quotechar='😺')

		for row in reader:
			if len(row) == 2:
				line.append(row)
			elif len(row) == 0:
				if should_break_lines:
					lines.append(line)
					line = []
				else:
					continue
			else:
				raise RuntimeError(f"Invalid len(row): {len(row)}")
			
		if line != []:
			lines.append(line)

	paragraphs = []
	for line in lines:
		tokens = []
		for k, v in line:
			token = Token(k, False, gloss=v)
			tokens.append(token)

		paragraph = Paragraph(None, False, prepared_tokens=tokens)
		paragraphs.append(paragraph)

	corpus = Corpus(None, prepared_paragraphs=paragraphs)

	output = input.replace(".csv", ".json")
	print(f"Writing {output}")
	with open(output, "wt", encoding="utf-8") as fout:
		json.dump(corpus.todict(), fout, indent='\t')