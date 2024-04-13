from django.urls import path
from .views import FileUploadAPIView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('upload-file/', FileUploadAPIView.as_view(), name='upload-file'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)