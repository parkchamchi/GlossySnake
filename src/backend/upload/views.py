from django.shortcuts import render
from django.views.decorators.http import require_POST

# Create your views here.

from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import UploadedCorpus

class FileUploadAPIView(APIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )

	def post(self, request, *args, **kwargs):
		try:
			corpus_data = request.data.get("corpus")
			
			uc = UploadedCorpus.objects.create()
			uc.corpus_init(corpus_data) #see model.py
			uc.save()
			corpus_id = uc.corpus_id

			return Response(
				{
					"message": "Upload success",
					"corpus_id": str(corpus_id), #TODO: change the doc to `int`
				},
				status=status.HTTP_201_CREATED
			)
	
		except Exception as e:
			return Response(
				{"error": str(e)},
				status=status.HTTP_400_BAD_REQUEST
			)