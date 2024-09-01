from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
	email = models.EmailField(unique=True)

	#API Keys
	openai_api_key = models.CharField(null=True, max_length=128)