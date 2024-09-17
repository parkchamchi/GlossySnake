"""
URL configuration for GlossySnakeBE project.

The `urlpatterns` list routes URLs to views. For more information please see:
	https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
	1. Add an import:  from my_app import views
	2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
	1. Add an import:  from other_app.views import Home
	2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
	1. Import the include() function: from django.urls import include, path
	2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from .views import IndexPageView, VueIndexPageView

urlpatterns = [
	path("", IndexPageView.as_view()),
	path("vue", VueIndexPageView.as_view()),
	path("admin/", admin.site.urls),
	path("api-auth/", include("rest_framework.urls")),
	path("api/v4/rest-auth/", include("dj_rest_auth.urls")), # /login, /logout, /user, ...
	path("api/v4/rest-auth/registration/", include("dj_rest_auth.registration.urls")),

	#path("v1/glosses/annotate", AnnotateAPIViewV1.as_view()), #deprecated dummy
	path("api/", include('upload.urls')), #cf. design doc
]
