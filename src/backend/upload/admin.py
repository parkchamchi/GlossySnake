from django.contrib import admin

# Register your models here.

from .models import UploadedCorpus, Task

admin.site.register(UploadedCorpus)
admin.site.register(Task)