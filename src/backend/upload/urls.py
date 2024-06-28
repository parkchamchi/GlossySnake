from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
	#path('admin/', admin.site.urls),
	path("upload", UploadAPIView.as_view(), name="api-upload"),

	path("parser/divide", ParserDivideAPIView.as_view(), name="api-parser-divide"),
	path("parser/parse", ParserParserAPIView.as_view(), name="api-parser-parse"),

	path("annotator/annotate", AnnotatorAnnotateAPIView.as_view(), name="api-annotator-annotate"),

	path("corpuses/<int:pk>", CorpusesAPIView.as_view(), name="api-corpuses-pk"),
	path("corpuses/", CorpusesListAPIView.as_view(), name="api-corpuses"),
	path("tasks/<int:pk>", TasksAPIView.as_view(), name="api-tasks-pk"),
	path("tasks/", TasksListAPIView.as_view(), name="api-tasks"),
]