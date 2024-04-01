from django.shortcuts import render

from rest_framework import views
from rest_framework.response import Response

from .utils import make_dummy_result

# Create your views here.
class AnnotateAPIView(views.APIView):
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