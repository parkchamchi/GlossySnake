"""
Django settings for GlossySnakeBE project.

Generated by 'django-admin startproject' using Django 5.0.3.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

import dotenv

import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
if DEBUG:
	SECRET_KEY = 'django-insecure-=l$t&l_yiiq#%%1u!h*@425snl&#eybe5(b1*k15dt%be+mw68'
else:
	dotenv.load_dotenv()
	SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")
	if not SECRET_KEY:
		raise RuntimeError("SECRET KEY NOT DETECTED.")

ALLOWED_HOSTS = [
	"127.0.0.1",
	".ap-northeast-2.compute.amazonaws.com",
	"glossysnake.com",
]

# Application definition

INSTALLED_APPS = [
	'django.contrib.admin',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
	"django.contrib.sites",
    
	#3rd party
	"rest_framework",
	"corsheaders", #cf. CORS
	"rest_framework.authtoken",
	"allauth",
	"allauth.account",
	"allauth.socialaccount",
	"dj_rest_auth",
	"dj_rest_auth.registration",

	#Local
	'upload.apps.UploadConfig',
]

#TODO: CHANGE THE PERMISSIONS
REST_FRAMEWORK = {
	"DEFAULT_PERMISSION_CLASSES": [
		"rest_framework.permissions.IsAuthenticated",
	],
	"DEFAULT_AUTHENTICATION_CLASSES": [ # new
		"rest_framework.authentication.SessionAuthentication",
		"rest_framework.authentication.TokenAuthentication",
	],
}

MIDDLEWARE = [
	#3rd party
	"corsheaders.middleware.CorsMiddleware",
	"allauth.account.middleware.AccountMiddleware",

	#Orig.
	'django.middleware.security.SecurityMiddleware',
	'django.contrib.sessions.middleware.SessionMiddleware',
	'django.middleware.common.CommonMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.contrib.auth.middleware.AuthenticationMiddleware',
	'django.contrib.messages.middleware.MessageMiddleware',
	'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

#TODO: SHOULD BE ALTERED ON DEPLOYMENT
CORS_ALLOWED_ORIGINS = (
	"http://127.0.0.1:3000",
	"http://127.0.0.1:8000",

	"http://127.0.0.1:56122",
	"http://127.0.0.1:56123",
)
CORS_ALLOW_CREDENTIALS = True
CSRF_TRUSTED_ORIGINS = ["http://127.0.0.1:56122"]

ROOT_URLCONF = 'GlossySnakeBE.urls'

TEMPLATES = [
	{
		'BACKEND': 'django.template.backends.django.DjangoTemplates',
		'DIRS': [BASE_DIR / "templates"],
		'APP_DIRS': True,
		'OPTIONS': {
			'context_processors': [
				'django.template.context_processors.debug',
				'django.template.context_processors.request',
				'django.contrib.auth.context_processors.auth',
				'django.contrib.messages.context_processors.messages',
				#"django.template.context_processors.request",
			],
		},
	},
]

AUTH_USER_MODEL = "upload.User"

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
SITE_ID = 1
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USERNAME_REQUIRED = False

#Following is added to enable registration with email instead of username
AUTHENTICATION_BACKENDS = (
	# Needed to login by username in Django admin, regardless of `allauth`
	"django.contrib.auth.backends.ModelBackend",
	# `allauth` specific authentication methods, such as login by e-mail
	"allauth.account.auth_backends.AuthenticationBackend",
)

WSGI_APPLICATION = 'GlossySnakeBE.wsgi.application'

# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.sqlite3',
		'NAME': BASE_DIR / 'db.sqlite3',
	}
}


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
	{
		'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
	},
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'
STATICFILES_DIRS = [BASE_DIR / "static/"]
STATIC_ROOT = BASE_DIR / "static_root"

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
