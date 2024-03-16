import json
import argparse
import os

GLOSS_DELIMITER = "||"

parser = argparse.ArgumentParser()

parser.add_argument("--input",
	help="the input file",
)

parser.add_argument("--input_dir",
	help="the input dir.",
)

parser.add_argument("--source_lang",
	default="French",
)

args = parser.parse_args()

system = f"Parse this corpus (Interlinear gloss). `{args.source_lang} to English translation`"

if args.input_dir is not None:
	jsons = [
		os.path.join(args.input_dir, fname)
		for fname
		in os.listdir(args.input_dir)
		if fname.endswith(".json")
	]
elif args.input is not None:
	jsons = [args.input]
else:
	raise RuntimeError("One of `--input` or `--input_dir` should be given.")

output = ""

for input in jsons:
	print(f"On {input}")

	with open(input, "rt", encoding="utf-8") as fin:
		jsoninput = json.load(fin)

	lines = []

	paragraphs = jsoninput["paragraphs"]
	for paragraph in paragraphs:
		if paragraph["is_delimiter"]: continue

		tokens = paragraph["tokens"]
		if tokens == []: continue

		user = ""
		assistant = ""
		for i, t in enumerate(tokens):
			if t["is_delimiter"]: continue

			txt, gloss = t["txt"], t["gloss"]
			user += f"{i}: {txt}\n"
			assistant += f"{i}: {txt} {GLOSS_DELIMITER} {gloss}\n"

		if user == "":
			continue

		#Remove trailing newline
		user = user[:-1]
		assistant = assistant[:-1]

		#Wrap the replay in a codeblock
		assistant = "```" + assistant + "```"

		line = {"messages": [
			{"role": "system", "content": system},
			{"role": "user", "content": user},
			{"role": "assistant", "content": assistant}
		]}
		line = json.dumps(line)
		lines.append(line)

	output += '\n'.join(lines)
	output += '\n'

with open("tmp/training_data.jsonl", "wt", encoding="utf-8") as fout:
	fout.write(output)