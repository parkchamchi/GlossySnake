from django.db import models

import serializables

class CorpusHeader(models.Model):
	id = models.AutoField(primary_key=True)

	current_task = models.IntegerField()

class DjCorpus(models.Model):
	id = models.AutoField(primary_key=True)

	original_text = models.TextField()
	p_div_locs = models.TextField()

	corpus_header_info = models.ForeignKey(CorpusHeader, on_delete=models.CASCADE)
	index = models.IntegerField()

class DjParagraph(models.Model):
	id = models.AutoField(primary_key=True)
	
	pstate = models.CharField(
		max_length=16,
		choices=serializables.ALLOWED_PSTATES,
	)

	is_delimiter = models.BooleanField()
	token_delimiters = models.TextField()
	annotator_info = models.TextField()
	original_text = models.TextField()

	corpus_id = models.ForeignKey(DjCorpus, on_delete=models.CASCADE)
	index = models.IntegerField()

class DjToken(models.Model):
	id = models.AutoField(primary_key=True)

	txt = models.TextField()
	gloss = models.TextField()
	is_delimiter = models.BooleanField()

	token_id = models.ForeignKey(DjParagraph, on_delete=models.CASCADE)
	index = models.IntegerField()

class DjParagraphDelimiter(models.Model):
	id = models.AutoField(primary_key=True)
	char = models.CharField(unique=True)

class DjParagraphDelimitersInCorpus(models.Models):
	class Meta:
		unique_together = (("corpus_id", "paragraph_delimiter_id"), )

	corpus_id = models.ForeignKey(DjCorpus, on_delete=models.CASCADE)
	paragraph_delimiter_id = models.ForeignKey(DjParagraphDelimiter, on_delete=models.CASCADE)

class TaskInfo(models.Models):
	id = models.AutoField(primary_key=True)

	timestamp = models.DateTimeField(auto_now_add=True)
	target_corpus_id = models.ForeignKey(CorpusHeader, on_delete=models.CASCADE)