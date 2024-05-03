from django.urls import path
from .views import UploadAPIView, ParserDivideAPIView, ParserParserAPIView, CorpusesAPIView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
	#path('admin/', admin.site.urls),
	path("upload", UploadAPIView.as_view(), name="api-upload"),
	path("parser/divide", ParserDivideAPIView.as_view(), name="api-parser-divide"),
	path("parser/parse", ParserParserAPIView.as_view(), name="api-parser-parse"),
	path("corpuses/<int:pk>", CorpusesAPIView.as_view(), name="api-corpuses-pk")
]