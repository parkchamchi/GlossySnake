from django.urls import path
from .views import FileUploadAPIView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
	#path('admin/', admin.site.urls),
	path("", FileUploadAPIView.as_view(), name="upload-file"),
]