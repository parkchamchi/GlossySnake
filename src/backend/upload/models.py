from django.db import models

from .serializables import Corpus

import warnings

# Create your models here.
	
class UploadedCorpus(models.Model):
	corpus_id = models.BigAutoField(primary_key=True)
 
	corpus_history = models.JSONField(null=True) #{"corpus_history": [(task_id, {}), ...]}

	current_task = models.BigIntegerField(null=True)
	
	@property
	def processed_tasks(self):
		out = []

		target = self.corpus_history
		for c_task_id, _ in target["corpus_history"]:
			out.append(c_task_id)
		
		return out
	
	def corpus_init(self, corpus):
		self.corpus_history = {
			"corpus_history": corpus
		}
 
	def add_corpus(self, corpus, task_id: int):
		if type(corpus) == Corpus:
			corpus = corpus.todict()

		target = self.corpus_history
		target["corpus_history"].append(
			(task_id, corpus)
		)
		self.corpus_history = target

	def get_curpus(self, task_id: int) -> Corpus:
		target = self.corpus_history
		for c_task_id, c in target["corpus_history"]:
			if c_task_id == task_id:
				return Corpus.fomrdict(c)
			
		return None
	
class Task(models.Model):
	task_id = models.BigAutoField(primary_key=True)
	timestamp = models.DateTimeField(auto_now_add=True)
	target_corpus_id = models.BigIntegerField()

	def abort(self):
		#raise NotImplementedError()
		warnings.warn("Not implemented.")

	def get_status(self):
		warnings.warn("Not implemented.")

	def get_logs(self):
		warnings.warn("Not implemented.")