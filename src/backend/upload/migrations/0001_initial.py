# Generated by Django 5.0.3 on 2024-09-22 12:33

import django.contrib.auth.models
import django.contrib.auth.validators
import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('is_temp_user', models.BooleanField(default=False)),
                ('available_openai_tokens', models.IntegerField(default=10000)),
                ('openai_api_key', models.CharField(max_length=128, null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='DjParagraphDelimiterV4',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('char', models.TextField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='TempUser',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            bases=('upload.user',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='CorpusHeaderV4',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='DjCorpusV4',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('original_text', models.TextField()),
                ('p_div_locs', models.TextField()),
                ('index', models.IntegerField()),
                ('corpus_header_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.corpusheaderv4')),
            ],
            options={
                'unique_together': {('corpus_header_id', 'index')},
            },
        ),
        migrations.CreateModel(
            name='TaskInfoV4',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('READY', 'Ready'), ('RUNNING', 'Running'), ('FINISHED', 'Finished'), ('ERROR', 'Error'), ('ABORTED', 'Aborted')], default='READY', max_length=16)),
                ('target_corpus_header_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.corpusheaderv4')),
            ],
        ),
        migrations.CreateModel(
            name='DjParagraphDelimitersInCorpusV4',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('corpus_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.djcorpusv4')),
                ('paragraph_delimiter_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.djparagraphdelimiterv4')),
            ],
            options={
                'unique_together': {('corpus_id', 'paragraph_delimiter_id')},
            },
        ),
        migrations.CreateModel(
            name='DjParagraphV4',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('tokens_json', models.JSONField(null=True)),
                ('pstate', models.CharField(choices=[('PLAIN', 'PLAIN'), ('DIVIDED', 'DIVIDED'), ('PARSED', 'PARSED'), ('ANNOTATED', 'ANNOTATED')], max_length=16)),
                ('is_delimiter', models.BooleanField()),
                ('token_delimiters', models.TextField()),
                ('annotator_info', models.TextField()),
                ('original_text', models.TextField()),
                ('index', models.IntegerField()),
                ('lang_from', models.TextField(null=True)),
                ('lang_to', models.TextField(null=True)),
                ('annotator_name', models.TextField(null=True)),
                ('corpus_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.djcorpusv4')),
            ],
            options={
                'unique_together': {('corpus_id', 'index')},
            },
        ),
    ]
