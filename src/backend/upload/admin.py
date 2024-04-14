from django.contrib import admin

# Register your models here.

from .models import UploadedFile #TODO: `UploadedFile` nowhere in the doc.

admin.site.register(UploadedFile)