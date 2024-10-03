from django.views.generic import TemplateView
from rest_framework import views
from rest_framework.response import Response

class IndexPageView(TemplateView):
	template_name = "index.html"

"""
class VueIndexPageView(TemplateView):
	template_name = "vue.html"

#Dummy v1.
import string

def make_dummy_token(txt="txt", is_delimiter=False, gloss="gloss"):
	return {
		"txt": txt,
		"is_delimiter": is_delimiter,
		"gloss": gloss,
	}

def make_dummy_result(outstring):
	d_tokens = outstring.split()
	d_tokens = [
		make_dummy_token(t, False, f"{t}({len(t)})")
		for t
		in d_tokens
	]

	out = {
		"paragraph_delimiters": ['\n'],
		"paragraphs": [
			{
				"is_delimiter": is_delimiter,
				"token_delimiters": string.whitespace,
				"tokens": tokens,
			}
			for tokens, is_delimiter
			in zip(
				[
					d_tokens,
					[make_dummy_token('\n', True, None)],
					[make_dummy_token("DUMMYEND")],
				],
				[False, True, False],
			)
		]
	}

	return out

class AnnotateAPIViewV1(views.APIView):
	def get(self, request):
		return Response(make_dummy_result("ERROR: GOT `GET` NOT `POST`"))

	def post(self, request):
		try:
			reqjson = request.data

			lang_from = reqjson["lang_from"]
			lang_to = reqjson["lang_to"]
			p_delim = reqjson["p_delim"]
			corpus = reqjson["corpus"]

			res_add = f"Request: `{lang_from}` to `{lang_to}`, len(p_delim): {len(p_delim)}, len(corpus): {len(corpus)}"
		except Exception as exc:
			res_add = f"EXCEPTION: {exc}"

		return Response(make_dummy_result("ANNOTATE: received. " + res_add))
"""