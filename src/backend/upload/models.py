from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import login

import uuid

class User(AbstractUser):
	email = models.EmailField(unique=True)
	is_temp_user = models.BooleanField(default=False)

	available_openai_tokens = models.IntegerField(default=10_000)

	#API Keys TODO: DEPRECATED
	openai_api_key = models.CharField(null=True, max_length=128)

	def add_token_usage(self, x):
		if self.available_openai_tokens < x:
			raise ValueError(f"{x} exceeds the av. token {self.available_openai_tokens}")
		
		self.available_openai_tokens -= x

	@staticmethod
	def get_temp_user(request):
		#Logs in.
		temp_user = TempUser.get()
		login(request, temp_user, backend="django.contrib.auth.backends.ModelBackend")
		return temp_user.email
	
class TempUser(User):
	@classmethod
	def get(cls):
		username = uuid.uuid1().hex
		email = username + "@example.com"
		temp_user = cls.objects.create_user(username=username, email=email, is_temp_user=True)
		return temp_user