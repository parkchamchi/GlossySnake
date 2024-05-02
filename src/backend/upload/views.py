from django.shortcuts import render
from django.views.decorators.http import require_POST

# Create your views here.

from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import UploadedCorpus, Task

from .parser import Parser
from .serializables import Corpus

import traceback
from typing import Callable

#TODO: generalize?

class UploadAPIView(APIView):
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
			traceback.print_exc(e)
			return Response(
				{"error": str(e)},
				status=status.HTTP_400_BAD_REQUEST
			)
		
class ManipulatorAPIView(APIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )

	def __init__(self, taskfunc: Callable[[UploadedCorpus, dict], None], query_list: dict):
		super().__init__()

		self.taskfunc = taskfunc
		self.query_list = query_list

	def post(self, request, *args, **kwargs):
		try:
			corpus_id = request.data.get("corpus_id")

			#Get the data
			data = {}
			for query in self.query_list:
				data[query] = request.data.get(query) #Sets `None` when it does not exist

			#Get the corpus
			uc = UploadedCorpus.objects.get(corpus_id=corpus_id) #TODO: on fail
			if uc.current_task is not None:
				raise ValueError(f"The corpus is already being processed by another task: {uc.current_task}")
			
			task = Task.objects.create(target_corpus_id=corpus_id)
			task_id = task.task_id
			task.run(self.taskfunc, data) #will save uc
			
			return Response(
				{
					"message": "Task put",
					"task_id": str(task_id), #TODO: change the doc to `int`
				},
				status=status.HTTP_201_CREATED
			)
	
		except Exception as e:
			#traceback.print_exc(e)
			print(traceback.format_exc())
			return Response(
				{"error": str(e)},
				status=status.HTTP_400_BAD_REQUEST
			)
		
class ParserDivideAPIView(ManipulatorAPIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )
	
	def __init__(self):
		def divide_task(uc, data):
			#Get the p_delims
			if data["divide_options"] is None:
				raise ValueError("`divide_options` is required.")
			p_delims = data["divide_options"]["p_delims"]

			parser = Parser()
			
			print("On divide_task()")
			corpus = uc.corpuses_history["corpuses_history"][-1]
			corpus = Corpus.fromdict(corpus)
			parser.divide_into_paragraphs(corpus, paragraph_delimiters=p_delims)
			uc.add_corpus(corpus)
			uc.save()

		super().__init__(divide_task, ["divide_options"])

class ParserParserAPIView(APIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )

	def post(self, request, *args, **kwargs):
		try:
			corpus_id = request.data.get("corpus_id")
			parse_options = request.data.get("parse_options")

			task_id = "NOT_IMPLEMENTED"
			
			return Response(
				{
					"message": "Task put",
					"task_id": str(task_id), #TODO: change the doc to `int`
				},
				status=status.HTTP_201_CREATED
			)
	
		except Exception as e:
			return Response(
				{"error": str(e)},
				status=status.HTTP_400_BAD_REQUEST
			)
		
class CorpusesAPIView(APIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )

	def get(self, request, *args, **kwargs):
		try:
			corpus_id = self.kwargs.get("pk")
			uc = UploadedCorpus.objects.get(corpus_id=corpus_id) #TODO: on fail
			corpus_history = uc.corpus_history
			
			return Response(
				{
					"corpus_history": corpus_history, #TODO: change the doc to `int`
				},
				status=status.HTTP_201_CREATED
			)
	
		except Exception as e:
			return Response(
				{"error": str(e)},
				status=status.HTTP_400_BAD_REQUEST
			)