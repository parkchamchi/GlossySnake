from django.db import models

import serializables

class DjToken(models.Model):
	class Meta:
		unique_together = (("txt", "gloss", "is_delimiter"), )

	id = models.AutoField(primary_key=True)

	txt = models.TextField()
	gloss = models.TextField()
	is_delimiter = models.BooleanField()

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

class DjCorpus(models.Model):
	id = models.AutoField(primary_key=True)

	original_text = models.TextField()
	p_div_locs = models.TextField()	

class DjTokensInParagraph(models.Model):
	class Meta:
		unique_together = (("dj_paragraph_id", "index", "dj_token_id"), )

	id = models.AutoField(primary_key=True)
	
	dj_paragraph_id = models.ForeignKey(DjParagraph, on_delete=models.CASCADE)
	index = models.IntegerField()
	dj_token_id = models.ForeignKey(DjToken, on_delete=models.CASCADE)

class DjParagraphsInCorpus(models.Model):
	class Meta:
		unique_together = (("dj_corpus_id", "index", "dj_paragraph_id"), )

	id = models.AutoField(primary_key=True)

	dj_corpus_id = models.ForeignKey(DjCorpus, on_delete=models.CASCADE)
	index = models.IntegerField()
	dj_paragraph_id = models.ForeignKey(DjParagraph, on_delete=models.CASCADE)

class DjParagraphDelimiter(models.Model):
	id = models.AutoField(primary_key=True)
	char = models.CharField(unique=True)

class DjParagraphDelimitersInCorpus(models.Models):
	class Meta:
		unique_together = (("dj_corpus_id", "dj_paragraph_delimiter_id"), )

	dj_corpus_id = models.ForeignKey(DjCorpus, on_delete=models.CASCADE)
	dj_paragraph_delimiter_id = models.ForeignKey(DjParagraphDelimiter, on_delete=models.CASCADE)

class CorpusHeader(models.Model):
	id = models.AutoField(primary_key=True)

	current_task = models.IntegerField()
	