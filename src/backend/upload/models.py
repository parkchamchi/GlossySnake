from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
	email = models.EmailField(unique=True)

	available_openai_tokens = models.IntegerField(default=0)

	#API Keys TODO: DEPRECATED
	openai_api_key = models.CharField(null=True, max_length=128)