import flask

import argparse
import json

app = flask.Flask(__name__)

import sys
sys.path.append("..")
from chatgpt_glossfetcher import ChatgptGlossFetcher, ChatgptGlossOptions
from intergloss import GlossEmbedder, Corpus

cgpt_gloss_options = None
gloss_embedder = None

@app.route("/")
def index():
	return "asdf"

@app.route("/gloss", methods=["POST"])
def gloss():
	data = flask.request.get_data()
	data = data.decode("utf-8")
	data = json.loads(data)
	corpus = data["corpus"]
	delimiter = data["delimiter"]

	print(f"Corpus: {corpus}, delimiter: {delimiter}")
	if delimiter != "\n":
		print("Check: delimiter")

	corpus = Corpus(corpus, paragraph_delimiters=[delimiter])
	for p in corpus.get_paragraphs_wo_delimiters():
		gloss_embedder.embed(p)

	if "gloss_inst" in data:
		gloss_inst = data["gloss_inst"]
		print(f"gloss_inst: {gloss_inst}")
		cgpt_gloss_options.gloss_insts = [gloss_inst]

	toret = corpus.todict()
	return toret

if __name__ == "__main__":
	parser = argparse.ArgumentParser()
	default_port = 56123
	parser.add_argument("-p", "--port",
		help=f"port number. defaults to {default_port}.",
		default=default_port
	)
	args = parser.parse_args()

	cgpt_gloss_options = ChatgptGlossOptions(gloss_insts=["`Latin to English translation`"], is_trained=True, example=None)
	gloss_fetcher = ChatgptGlossFetcher(use_pretrained_model=True, ignore_incomplete_res=True, chatgpt_gloss_options=cgpt_gloss_options)
	gloss_embedder = GlossEmbedder(gloss_fetcher)

	app.run(port=args.port, debug=True)