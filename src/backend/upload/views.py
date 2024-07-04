from django.shortcuts import render
from django.views.decorators.http import require_POST

# Create your views here.

from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

#from .models import UploadedCorpus, Task
from .dj_serializables import *

from .parser import Parser
from .annotator import Annotator
from .serializables import Corpus

import traceback
from typing import Callable
import json

#TODO: generalize?

class UploadAPIView(APIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )

	def post(self, request, *args, **kwargs):
		try:
			corpus_data = request.data.get("corpus")
			original_text = request.data.get("original_text")

			if corpus_data is None and original_text is None:
				raise ValueError("One of `corpus` and `origianl_text` should be provided.")
			elif corpus_data is not None and original_text is not None:
				raise ValueError("Only one of `corpus` and `origianl_text` should be provided.")
			elif original_text is not None:
				corpus_data = Corpus(paragraphs=[], paragraph_delimiters=[], original_text=original_text, p_div_locs=[])
			
			uc = CorpusHeader.objects.create()
			uc.add_corpus(corpus_data) #see model.py
			uc.save()
			corpus_id = uc.id

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

	def __init__(self, taskfunc: Callable[[CorpusHeader, dict], None], query_list: dict):
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
			uc = CorpusHeader.objects.get(id=corpus_id) #TODO: on fail
			if uc.current_task is not None:
				raise ValueError(f"The corpus is already being processed by another task: {uc.current_task}")
			
			task = TaskInfo.objects.create(target_corpus_header_id=uc)
			task_id = task.id
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

#TODO: Divide not working
class ParserDivideAPIView(ManipulatorAPIView):
	def __init__(self):
		def divide_task(uc, data):
			#Get the p_delims
			if data["divide_options"] is None:
				raise ValueError("`divide_options` is required.")
			if type(data["divide_options"]) is str:
				data["divide_options"] = json.loads(data["divide_options"])
			p_delims = data["divide_options"]["p_delims"]

			parser = Parser()
			
			#print("On divide_task()")
			corpus = uc.get_last_corpus()
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
			if type(data["parse_options"]) is str:
				data["parse_options"] = json.loads(data["parse_options"])
			t_delims = data["parse_options"]["t_delims"]

			parser = Parser()
			
			#print("On parse_task()")
			corpus = uc.get_last_corpus()
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
			if type(data["annotate_options"]) is str:
				data["annotate_options"] = json.loads(data["annotate_options"])
			annotate_options = data["annotate_options"]
			lang_from = annotate_options["lang_from"]
			lang_to = annotate_options["lang_to"]

			annotator_name = annotate_options.get("annotator_name")
			
			#Annotate
			if annotator_name == "chatgpt_ft0":
				from .chatgpt_annotator import ChatgptAnnotator #TODO: try?
				annotator = ChatgptAnnotator()
			else:
				annotator = Annotator()

			#print("On parse_task()")
			corpus = uc.get_last_corpus()
			corpus = Corpus.fromdict(corpus)

			#To be edited.
			uc.add_corpus(corpus)

			for p in corpus.paragraphs:
				annotator.annotate(p, lang_from, lang_to)

				#Apply to DB
				#Now this is why the model has to be changed to the Django model... (TODO)
				uc.edit_last_corpus(corpus)
				uc.save()

			uc.save()

		super().__init__(annotate_task, ["annotate_options"])
		
class CorpusesAPIView(APIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )

	def get(self, request, *args, **kwargs):
		try:
			corpus_id = self.kwargs.get("pk")
			uc = CorpusHeader.objects.get(id=corpus_id) #TODO: on fail
			corpuses_history = uc.corpuses_history
			corpuses_history = corpuses_history["corpuses_history"]
			
			return Response(
				{
					"corpus_id": corpus_id,
					"corpuses_history": corpuses_history,
				},
				status=status.HTTP_200_OK
			)
	
		except Exception as e:
			return Response(
				{"error": str(e)},
				status=status.HTTP_400_BAD_REQUEST
			)
		
class CorpusesListAPIView(APIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )

	def get(self, request, *args, **kwargs):
		try:
			toret= [
				{"corpus_id": uc.id, "corpuses_history": uc.corpuses_history}
				for uc
				in CorpusHeader.objects.all()
			]
			
			return Response(
				toret,
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
			task = TaskInfo.objects.get(task=task_id) #TODO: on fail
			
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
		
class TasksListAPIView(APIView):
	parser_classes = [JSONParser]
	permission_classes = (AllowAny, )

	def get(self, request, *args, **kwargs):
		try:
			tasks = TaskInfo.objects.all()
			toret = [
				{
					"timestamp": task.timestamp,
					"target_corpus_id": str(task.target_corpus_header_id.id),
					"status": task.status
				}
				for task
				in tasks 
			]
			
			return Response(
				toret,
				status=status.HTTP_200_OK
			)
	
		except Exception as e:
			return Response(
				{"error": str(e)},
				status=status.HTTP_400_BAD_REQUEST
			)
		