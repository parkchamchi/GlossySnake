from django.urls import path

from .views import AnnotateAPIView

urlpatterns = [
	path("annotate", AnnotateAPIView.as_view(), name="annotate_view"),
]