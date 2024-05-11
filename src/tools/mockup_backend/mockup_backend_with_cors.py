import flask

from flask_cors import CORS

import argparse
import json

app = flask.Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})

json_okay = \
	{"paragraph_delimiters":["\n"],"paragraphs":[{"is_delimiter":False,"token_delimiters":" \t\n\r\u000b\f","tokens":[{"txt":"Les","is_delimiter":False,"gloss":"The"},{"txt":" ","is_delimiter":True,"gloss":None},{"txt":"champs","is_delimiter":False,"gloss":"fields"}]},{"is_delimiter":True,"token_delimiters":" \t\n\r\u000b\f","tokens":[{"txt":"\n\n","is_delimiter":True,"gloss":None}]},{"is_delimiter":False,"token_delimiters":" \t\n\r\u000b\f","tokens":[{"txt":"n'étaient","is_delimiter":False,"gloss":"!UNKNOWN"}]}]}

json_getnotpost = \
	{'paragraph_delimiters': ['\n'], 'paragraphs': [{'is_delimiter': False, 'token_delimiters': ' \t\n\r\x0b\x0c', 'tokens': [{'gloss': '0: ERROR:', 'is_delimiter': False, 'txt': 'ERROR:'}, {'gloss': None, 'is_delimiter': True, 'txt': ' '}, {'gloss': '!UNKNOWN', 'is_delimiter': False, 'txt': 'METHOD'}, {'gloss': None, 'is_delimiter': True, 'txt': ' '}, {'gloss': '!UNKNOWN', 'is_delimiter': False, 'txt': 'IS'}, {'gloss': None, 'is_delimiter': True, 'txt': ' '}, {'gloss': '!UNKNOWN', 'is_delimiter': False, 'txt': '"GET"'}, {'gloss': None, 'is_delimiter': True, 'txt': ' '}, {'gloss': '!UNKNOWN', 'is_delimiter': False, 'txt': 'NOT'}, {'gloss': None, 'is_delimiter': True, 'txt': ' '}, {'gloss': '!UNKNOWN', 'is_delimiter': False, 'txt': '"POST"'}]}]}

json_gotunkownmethod = \
	{'paragraph_delimiters': ['\n'], 'paragraphs': [{'is_delimiter': False, 'token_delimiters': ' \t\n\r\x0b\x0c', 'tokens': [{'gloss': '0: ERROR:', 'is_delimiter': False, 'txt': 'ERROR:'}, {'gloss': None, 'is_delimiter': True, 'txt': ' '}, {'gloss': '!UNKNOWN', 'is_delimiter': False, 'txt': 'INVALID'}, {'gloss': None, 'is_delimiter': True, 'txt': ' '}, {'gloss': '!UNKNOWN', 'is_delimiter': False, 'txt': 'METHOD'}]}]}

json_unknown_endpoint = \
	{'paragraph_delimiters': ['\n'], 'paragraphs': [{'is_delimiter': False, 'token_delimiters': ' \t\n\r\x0b\x0c', 'tokens': [{'gloss': '0: ERROR:', 'is_delimiter': False, 'txt': 'ERROR:'}, {'gloss': None, 'is_delimiter': True, 'txt': ' '}, {'gloss': '!UNKNOWN', 'is_delimiter': False, 'txt': 'INVALID'}, {'gloss': None, 'is_delimiter': True, 'txt': ' '}, {'gloss': '!UNKNOWN', 'is_delimiter': False, 'txt': 'ENDPOINT'}]}]}

@app.route("/", methods=["POST", "GET"])
@app.route("/gloss", methods=["POST", "GET"])
def index():
	method = flask.request.method

	if method == "GET":
		return "use <a href='/v1/glosses/annotate'>/v1/glosses/annotate</a>"
	else:
		return json_unknown_endpoint

@app.route("/v1/glosses/annotate", methods=["POST", "GET"])
def annotate():
	print("On annotate()")

	method = flask.request.method
	if method == "POST":
		outjson = json_okay
	elif method == "GET":
		outjson = json_getnotpost
	else:
		outjson = json_gotunkownmethod

	return outjson

if __name__ == "__main__":
	parser = argparse.ArgumentParser()
	default_port = 56123
	parser.add_argument("-p", "--port",
		help=f"port number. defaults to {default_port}.",
		default=default_port
	)
	args = parser.parse_args()

	app.run(port=args.port, debug=True)