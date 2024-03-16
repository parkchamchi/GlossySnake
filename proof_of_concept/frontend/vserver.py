import flask
from flask_bootstrap import Bootstrap

import argparse
import json

app = flask.Flask(__name__)
bootstrap = Bootstrap(app)

@app.route("/", methods=["GET", "POST"])
def index():
	if flask.request.method == "POST":
		if "usercorpus_submit" in flask.request.form:
			import requests

			endpoint = flask.request.form.get("endpoint")
			corpus = flask.request.form.get("usercorpus")
			delimiter = flask.request.form.get("delimiter")
			print(endpoint)

			e_url = endpoint + "/gloss"
			if "http" not in e_url:
				e_url = "http://" + e_url
			e_data = {"corpus": corpus, "delimiter": delimiter}
			e_data = json.dumps(e_data)
			e_res = requests.post(e_url, data=e_data)
			e_res = e_res.json()

			print(e_res)

			data = e_res

		elif "json_submit" in flask.request.form:
			#data = flask.request.data
			print(flask.request.files)
			data = flask.request.files["jsonfile"]
			data = data.read()
			data = json.loads(data)
	else:
		data = None
	return flask.render_template("index.html", data=data, token_unknown="!UNKNOWN")

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