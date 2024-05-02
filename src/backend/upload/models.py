from django.db import models

from .serializables import Corpus

import warnings

# Create your models here.
	
class UploadedCorpus(models.Model):
	corpus_id = models.BigAutoField(primary_key=True)
 
	#TODO: use django serialization
	corpuses_history = models.JSONField(null=True) #{"corpuses_history": [{}, {}, ...]

	current_task = models.BigIntegerField(null=True)
	
	@property
	def processed_tasks(self):
		out = []

		target = self.corpuses_history
		for c_task_id, _ in target["corpuses_history"]:
			out.append(c_task_id)
		
		return out
	
	def corpus_init(self, corpus):
		print(corpus)
		self.corpuses_history = {
			"corpuses_history": [corpus]
		}
 
	def add_corpus(self, corpus):
		if type(corpus) == Corpus:
			corpus = corpus.todict()

		target = self.corpuses_history
		target["corpuses_history"].append(corpus)
		self.corpuses_history = target

	"""
	def get_corpus(self, task_id: int) -> Corpus:
		target = self.corpuses_history
		for c_task_id, c in target["corpuses_history"]:
			if c_task_id == task_id:
				return Corpus.fomrdict(c)
			
		return None
	"""
	
class Task(models.Model):
	task_id = models.BigAutoField(primary_key=True)
	timestamp = models.DateTimeField(auto_now_add=True)
	target_corpus_id = models.BigIntegerField() #TODO: FK

	def abort(self):
		#raise NotImplementedError()
		warnings.warn("Not implemented.")

	def get_status(self):
		warnings.warn("Not implemented.")

	def get_logs(self):
		warnings.warn("Not implemented.")

	def run(self, func):
		func() #TODO: aynch-ize this

		uploaded_corpus = UploadedCorpus.objects.get(corpus_id=self.target_corpus_id)
		uploaded_corpus.current_task = None
		uploaded_corpus.processed_tasks.append(self.task_id)