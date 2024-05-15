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
from .annotator import Annotator
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
			traceback.print_exc()
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
				status=status.HTTP_200_OK
			)
	
		except Exception as e:
			print(traceback.format_exc())
			return Response(
				{"error": str(e)},
				status=status.HTTP_400_BAD_REQUEST
			)
		
class ParserDivideAPIView(ManipulatorAPIView):
	def __init__(self):
		def divide_task(uc, data):
			#Get the p_delims
			if data["divide_options"] is None:
				raise ValueError("`divide_options` is required.")
			p_delims = data["divide_options"]["p_delims"]

			parser = Parser()
			
			#print("On divide_task()")
			corpus = uc.corpuses_history["corpuses_history"][-1]
			corpus = Corpus.fromdict(corpus)
			parser.divide_into_paragraphs(corpus, paragraph_delimiters=p_delims)
			uc.add_corpus(corpus)
			uc.save()

		super().__init__(divide_task, ["divide_options"])

class ParserParserAPIView(ManipulatorAPIView):
	def __init__(self):
		def parse_task(uc, data):
			#Get the p_delims
			if data["parse_options"] is None:
				raise ValueError("`parse_options` is required.")
			t_delims = data["parse_options"]["t_delims"]

			parser = Parser()
			
			#print("On parse_task()")
			corpus = uc.corpuses_history["corpuses_history"][-1] #TODO: Does the former corpus here change in the DB? (should not)
			corpus = Corpus.fromdict(corpus)

			for p in corpus.paragraphs:
				parser.parse_paragraph(p, t_delims)
			
			uc.add_corpus(corpus)
			uc.save()

		super().__init__(parse_task, ["parse_options"])

class AnnotatorAnnotateAPIView(ManipulatorAPIView):
	def __init__(self):
		def annotate_task(uc, data):
			#Parse `annotate_options`
			if data["annotate_options"] is None:
				raise ValueError("`annotate_options` is required.")
			annotate_options = data["annotate_options"]
			lang_from = annotate_options["lang_from"]
			lang_to = annotate_options["lang_to"]
			
			#Annotate
			annotator = Annotator()

			#print("On parse_task()")
			corpus = uc.corpuses_history["corpuses_history"][-1] #TODO: Does the former corpus here change in the DB? (should not)
			corpus = Corpus.fromdict(corpus)

			for p in corpus.paragraphs:
				annotator.annotate(p, lang_from, lang_to)

			uc.add_corpus(corpus)
			uc.save()

		super().__init__(annotate_task, ["annotate_options"])
		
class CorpusesAPIView(APIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )

	def get(self, request, *args, **kwargs):
		try:
			corpus_id = self.kwargs.get("pk")
			uc = UploadedCorpus.objects.get(corpus_id=corpus_id) #TODO: on fail
			corpuses_history = uc.corpuses_history
			corpuses_history = corpuses_history["corpuses_history"]
			
			return Response(
				{
					"corpuses_history": corpuses_history,
				},
				status=status.HTTP_200_OK
			)
	
		except Exception as e:
			return Response(
				{"error": str(e)},
				status=status.HTTP_400_BAD_REQUEST
			)
		
class TasksAPIView(APIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )

	def get(self, request, *args, **kwargs):
		try:
			task_id = self.kwargs.get("pk")
			task = Task.objects.get(task_id=task_id) #TODO: on fail
			
			return Response(
				{
					"timestamp": task.timestamp,
					"target_corpus_id": str(task.target_corpus_id),
					"status": task.status
				},
				status=status.HTTP_200_OK
			)
	
		except Exception as e:
			return Response(
				{"error": str(e)},
				status=status.HTTP_400_BAD_REQUEST
			)
		