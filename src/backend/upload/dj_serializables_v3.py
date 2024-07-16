from django.db import models

from .serializables import Corpus, Paragraph, Token, ALLOWED_PSTATES

import warnings
import traceback
from typing import List, Dict

class TaskStatusV3(models.TextChoices):
	READY = "READY"
	RUNNING = "RUNNING"

	FINISHED = "FINISHED"

	ERROR = "ERROR"
	ABORTED = "ABORTED"

class CorpusHeaderV3(models.Model):
	id = models.AutoField(primary_key=True)

	def add_corpus(self, corpus_obj: Corpus):
		# Set the corpus as a child of this object.
		if type(corpus_obj) == dict:
			corpus_obj = Corpus.fromdict(corpus_obj)

		#First check the index of this
		cur_len = DjCorpusV3.objects.filter(corpus_header_id=self.id).count()
		corpus_id = cur_len + 1

		#Create the DjCorpusV3Object
		dj_corpus = DjCorpusV3.objects.create(
			original_text=corpus_obj.original_text,
			p_div_locs=corpus_obj.p_div_locs,

			corpus_header_id=self,
			index=corpus_id,
		)
		dj_corpus.save()

		#Then create the paragraphs
		for p_idx, p_obj in enumerate(corpus_obj.paragraphs):
			dj_p = DjParagraphV3.objects.create(
				pstate=p_obj.pstate,
				is_delimiter=p_obj.is_delimiter,
				token_delimiters=p_obj.token_delimiters,
				annotator_info=p_obj.annotator_info,
				original_text=p_obj.original_text,

				corpus_id=dj_corpus,
				index=p_idx,
			)
			dj_p.save()

			#Create the tokens
			for t_idx, t_obj in enumerate(p_obj.tokens):
				dj_t = DjTokenV3.objects.create(
					txt=t_obj.txt,
					gloss=t_obj.gloss,
					is_delimiter=t_obj.is_delimiter,

					paragraph_id=dj_p,
					index=t_idx,
				)
				dj_t.save()

		#Finally set the p_delims
		if corpus_obj.paragraph_delimiters:
			for p_delim in corpus_obj.paragraph_delimiters:
				#is p_delim already in `DjParagraphDelimiterV3`?
				dj_p_delim = DjParagraphDelimiterV3.objects.filter(char=p_delim)
				if not dj_p_delim:
					#Create one
					dj_p_delim = DjParagraphDelimiterV3.objects.create(char=p_delim)
				else:
					dj_p_delim = dj_p_delim[0]

				#Set the pair
				DjParagraphDelimitersInCorpusV3.objects.create(corpus_id=dj_corpus, paragraph_delimiter_id=dj_p_delim)

	def get_corpuses(self):
		return DjCorpusV3.objects.filter(corpus_header_id=self.id).order_by("index")

	@property
	def current_task(self):
		res = list(TaskInfoV3.objects.filter(target_corpus_header_id=self.id)
			.exclude(status__in=[TaskStatusV3.FINISHED, TaskStatusV3.ABORTED, TaskStatusV3.ERROR]))
		if not res:
			res = None
		return res
	
	@property
	def corpuses_history(self) -> List[Dict]:
		return [
			e.to_serializable().todict() 
			for e 
			in self.get_corpuses()
		]
	
	def get_last_corpus(self) -> Dict:
		return self.corpuses_history[-1]

	def edit_last_corpus(self, corpus: Corpus):
		if type(corpus) == dict:
			corpus = Corpus.fromdict(corpus)

		#TODO: not a good behavior

		todel = self.get_last_corpus()
		self.get_corpuses().last().delete()

		try:
			self.add_corpus(corpus)
		except:
			self.add_corpus(todel)

class DjCorpusV3(models.Model):
	class Meta:
		unique_together = (("corpus_header_id", "index"), )

	id = models.AutoField(primary_key=True)

	original_text = models.TextField()
	p_div_locs = models.TextField()

	corpus_header_id = models.ForeignKey(CorpusHeaderV3, on_delete=models.CASCADE)
	index = models.IntegerField()

	def get_paragraphs(self):
		return DjParagraphV3.objects.filter(corpus_id=self.id).order_by("index")

	def to_serializable(self):
		return Corpus(
			paragraphs=[e.to_serializable() for e in self.get_paragraphs()],
			paragraph_delimiters=[e.char for e in self.paragraph_delimiters],
			original_text=self.original_text,
			p_div_locs=self.p_div_locs,
		)
	
	@property
	def paragraph_delimiters(self):
		return [
			DjParagraphDelimiterV3.objects.filter(id=pair.paragraph_delimiter_id.id)[0]
			for pair
			in DjParagraphDelimitersInCorpusV3.objects.filter(corpus_id=self)
		]

class DjParagraphV3(models.Model):
	class Meta:
		unique_together = (("corpus_id", "index"), )

	id = models.AutoField(primary_key=True)
	
	pstate = models.CharField(
		max_length=16,
		choices=[
			(e, e)
			for e
			in ALLOWED_PSTATES
		],
	)

	is_delimiter = models.BooleanField()
	token_delimiters = models.TextField()
	annotator_info = models.TextField()
	original_text = models.TextField()

	corpus_id = models.ForeignKey(DjCorpusV3, on_delete=models.CASCADE)
	index = models.IntegerField()

	def get_tokens(self):
		return DjTokenV3.objects.filter(paragraph_id=self.id).order_by("index")

	def to_serializable(self):
		return Paragraph(
			pstate=self.pstate,
			tokens=[e.to_serializable() for e in self.get_tokens()],
			is_delimiter=self.is_delimiter,
			token_delimiters=self.token_delimiters,
			annotator_info=self.annotator_info,
			original_text=self.original_text,
		)

class DjTokenV3(models.Model):
	class Meta:
		unique_together = (("paragraph_id", "index"), )

	id = models.AutoField(primary_key=True)

	txt = models.TextField()
	gloss = models.TextField(null=True)
	is_delimiter = models.BooleanField()

	paragraph_id = models.ForeignKey(DjParagraphV3, on_delete=models.CASCADE)
	index = models.IntegerField()

	def to_serializable(self):
		return Token(
			txt=self.txt,
			gloss=self.gloss,
			is_delimiter=self.is_delimiter,
		)

class DjParagraphDelimiterV3(models.Model):
	id = models.AutoField(primary_key=True)
	char = models.TextField(unique=True)

class DjParagraphDelimitersInCorpusV3(models.Model):
	class Meta:
		unique_together = (("corpus_id", "paragraph_delimiter_id"), )

	corpus_id = models.ForeignKey(DjCorpusV3, on_delete=models.CASCADE)
	paragraph_delimiter_id = models.ForeignKey(DjParagraphDelimiterV3, on_delete=models.CASCADE)

class TaskInfoV3(models.Model):
	id = models.AutoField(primary_key=True)

	timestamp = models.DateTimeField(auto_now_add=True)
	target_corpus_header_id = models.ForeignKey(CorpusHeaderV3, on_delete=models.CASCADE)

	status = models.CharField(max_length=16, choices=TaskStatusV3.choices, default=TaskStatusV3.READY)
	
	def abort(self):
		#raise NotImplementedError()
		warnings.warn("Not implemented.")

	def get_logs(self):
		warnings.warn("Not implemented.")

	def run(self, func, data, use_threading=False):
		self.status = TaskStatusV3.RUNNING
		self.save()

		if not use_threading:
			self.run_inner(func, data)
		
		else:
			#TODO: unstable
			import threading

			th = threading.Thread(target=self.run_inner, args=(func, data))
			th.start()

	def run_inner(self, func, data):
		#print("run_inner() started")

		#self.status = self.TaskStatusV3.RUNNING #Redundant
		#self.save()

		uploaded_corpus = CorpusHeaderV3.objects.get(id=self.target_corpus_header_id.id)
		#uploaded_corpus.current_task = self.task_id
		#uploaded_corpus.save()

		exc_to_rethrow = None

		try:
			func(uploaded_corpus, data) #TODO: aynch-ize this
		except Exception as exc:
			#TODO: set task status
			exc_to_rethrow = exc
			print(traceback.format_exc())
			
		#uploaded_corpus.current_task = None
		#uploaded_corpus.save()

		if exc_to_rethrow:
			self.status = TaskStatusV3.ERROR
			self.save()
			raise exc_to_rethrow
		self.status = TaskStatusV3.FINISHED
		self.save()
		
		#print("run_inner() terminated")
	
	def __repr__(self):
		return f"<TaskInfoV3: {self.id}, {self.status}>"