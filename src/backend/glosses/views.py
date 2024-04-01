from django.shortcuts import render

from rest_framework import views
from rest_framework.response import Response

from .utils import make_dummy_result

# Create your views here.
class AnnotateAPIView(views.APIView):
	def get(self, request):
		return Response(make_dummy_result("ERROR: GOT `GET` NOT `POST`"))

	def post(self, request):
		return Response(make_dummy_result("OKAY. FROM ANNOTATE()"))