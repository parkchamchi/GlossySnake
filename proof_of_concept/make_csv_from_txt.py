from intergloss import Corpus, Paragraph, Token

import json
import argparse
import os

delimiter = '|'

parser = argparse.ArgumentParser()

parser.add_argument("--input",
	help="the input file",
)

parser.add_argument("--input_dir",
	help="the input dir.",
)

args = parser.parse_args()

if args.input_dir is not None:
	txts = [
		os.path.join(args.input_dir, fname)
		for fname
		in os.listdir(args.input_dir)
		if fname.endswith(".txt")
	]
elif args.input is not None:
	txts = [args.input]
else:
	raise RuntimeError("One of `--input` or `--input_dir` should be given.")

for input in txts:
	print(f"At `{input}`")
	out = ""

	with open(input, "rt", encoding="utf-8") as fin:
		rows = [row.strip() for row in fin.readlines()]
	rows = [row for row in rows if row != ""]

	if len(rows) % 2 != 0:
		raise RuntimeError("Line count not even")

	for i in range(len(rows) // 2):
		fromt = rows[2*i]
		tot = rows[2*i + 1]

		fromt = fromt.split()
		tot = tot.split()

		if len(fromt) != len(tot):
			raise RuntimeError(f"Count not matching: `{fromt}`, `{tot}`")

		for f, t in zip(fromt, tot):
			out += f"{f}{delimiter}{t}\n"
			
	output = input.replace(".txt", ".csv")
	print(f"Writing {output}")
	with open(output, "wt", encoding="utf-8") as fout:
		fout.write(out)