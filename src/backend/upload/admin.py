from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Register your models here.

from .models import User

class ExtendedUserAdmin(UserAdmin):
	model = User
	list_display = ["email", "available_openai_tokens"]
	fieldsets = UserAdmin.fieldsets + (
		(None, {"fields": ("available_openai_tokens", )}),
	)

admin.site.register(User, ExtendedUserAdmin)