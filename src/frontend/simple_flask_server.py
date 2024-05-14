import flask

import argparse
import json

app = flask.Flask(__name__, template_folder=".")

index_html = "mockup.html" #What is the difference between `mockup.html` and `test.html`?

def read_html(target):
	#I'll just read the html file instead of using `render_template()`...
	with open(target, "rt", encoding="utf-8") as fin:
		html = fin.read()

	return html

@app.route("/", methods=["GET", "POST"])
def index():
	#return flask.render_template("mockup.html")
	return read_html(index_html)

#Ignore this.
@app.route("/<path>")
def getstatic(path):
	return app.send_static_file(path)

if __name__ == "__main__":
	parser = argparse.ArgumentParser()
	default_port = 56122
	parser.add_argument("-p", "--port",
		help=f"port number. defaults to {default_port}.",
		default=default_port
	)
	args = parser.parse_args()

	app.run(port=args.port, debug=True)