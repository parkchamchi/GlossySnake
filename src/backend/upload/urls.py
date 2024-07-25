from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views_v4 import *
from .views_v3 import *
from .views_v2 import *

urlpatterns = [
	#path('admin/', admin.site.urls),
	
	#/v2/
	path("v2/upload", UploadAPIView.as_view(), name="api-upload"),

	path("v2/parser/divide", ParserDivideAPIView.as_view(), name="api-parser-divide"),
	path("v2/parser/parse", ParserParserAPIView.as_view(), name="api-parser-parse"),

	path("v2/annotator/annotate", AnnotatorAnnotateAPIView.as_view(), name="api-annotator-annotate"),

	path("v2/corpuses/<int:pk>", CorpusesAPIView.as_view(), name="api-corpuses-pk"),
	path("v2/corpuses/", CorpusesListAPIView.as_view(), name="api-corpuses"),
	path("v2/tasks/<int:pk>", TasksAPIView.as_view(), name="api-tasks-pk"),
	path("v2/tasks/", TasksListAPIView.as_view(), name="api-tasks"),

	#/v3/
	path("v3/upload", UploadAPIViewV3.as_view(), name="api-v3-upload"),

	path("v3/parser/divide", ParserDivideAPIViewV3.as_view(), name="api-v3-parser-divide"),
	path("v3/parser/parse", ParserParserAPIViewV3.as_view(), name="api-v3-parser-parse"),

	path("v3/annotator/annotate", AnnotatorAnnotateAPIViewV3.as_view(), name="api-v3-annotator-annotate"),

	path("v3/corpuses/<int:pk>", CorpusesAPIViewV3.as_view(), name="api-v3-corpuses-pk"),
	path("v3/corpuses/", CorpusesListAPIViewV3.as_view(), name="api-v3-corpuses"),
	path("v3/tasks/<int:pk>", TasksAPIViewV3.as_view(), name="api-v3-tasks-pk"),
	path("v3/tasks/", TasksListAPIViewV3.as_view(), name="api-v3-tasks"),

	#/v4/
	path("v4/upload", UploadAPIViewV4.as_view(), name="api-v4-upload"),

	path("v4/parser/divide", ParserDivideAPIViewV4.as_view(), name="api-v4-parser-divide"),
	path("v4/parser/parse", ParserParserAPIViewV4.as_view(), name="api-v4-parser-parse"),

	path("v4/annotator/annotate", AnnotatorAnnotateAPIViewV4.as_view(), name="api-v4-annotator-annotate"),
	path("v4/annotator/reannotate", AnnotatorReannotateAPIViewV4.as_view(), name="api-v4-annotator-reannotate"),

	path("v4/corpuses/<int:pk>", CorpusesAPIViewV4.as_view(), name="api-v4-corpuses-pk"),
	path("v4/corpuses/", CorpusesListAPIViewV4.as_view(), name="api-v4-corpuses"),
	path("v4/tasks/<int:pk>", TasksAPIViewV4.as_view(), name="api-v4-tasks-pk"),
	path("v4/tasks/<int:pk>/abort", TasksAbortViewV4.as_view(), name="api-v4-tasks-pk-abort"),
	path("v4/tasks/", TasksListAPIViewV4.as_view(), name="api-v4-tasks"),
]