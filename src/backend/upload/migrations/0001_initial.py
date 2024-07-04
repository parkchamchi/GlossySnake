# Generated by Django 4.1.7 on 2024-07-04 12:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CorpusHeader',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='DjCorpus',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('original_text', models.TextField()),
                ('p_div_locs', models.TextField()),
                ('index', models.IntegerField()),
                ('corpus_header_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.corpusheader')),
            ],
            options={
                'unique_together': {('corpus_header_id', 'index')},
            },
        ),
        migrations.CreateModel(
            name='DjParagraph',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('pstate', models.CharField(choices=[('PLAIN', 'PLAIN'), ('DIVIDED', 'DIVIDED'), ('PARSED', 'PARSED'), ('ANNOTATED', 'ANNOTATED')], max_length=16)),
                ('is_delimiter', models.BooleanField()),
                ('token_delimiters', models.TextField()),
                ('annotator_info', models.TextField()),
                ('original_text', models.TextField()),
                ('index', models.IntegerField()),
                ('corpus_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.djcorpus')),
            ],
            options={
                'unique_together': {('corpus_id', 'index')},
            },
        ),
        migrations.CreateModel(
            name='DjParagraphDelimiter',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('char', models.TextField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('task_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('target_corpus_id', models.BigIntegerField()),
                ('status', models.CharField(choices=[('READY', 'Ready'), ('RUNNING', 'Running'), ('FINISHED', 'Finished'), ('ERROR', 'Error'), ('ABORTED', 'Aborted')], default='READY', max_length=16)),
            ],
        ),
        migrations.CreateModel(
            name='UploadedCorpus',
            fields=[
                ('corpus_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('corpuses_history', models.JSONField(null=True)),
                ('current_task', models.BigIntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TaskInfo',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('READY', 'Ready'), ('RUNNING', 'Running'), ('FINISHED', 'Finished'), ('ERROR', 'Error'), ('ABORTED', 'Aborted')], default='READY', max_length=16)),
                ('target_corpus_header_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.corpusheader')),
            ],
        ),
        migrations.CreateModel(
            name='DjToken',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('txt', models.TextField()),
                ('gloss', models.TextField()),
                ('is_delimiter', models.BooleanField()),
                ('index', models.IntegerField()),
                ('paragraph_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.djparagraph')),
            ],
            options={
                'unique_together': {('paragraph_id', 'index')},
            },
        ),
        migrations.CreateModel(
            name='DjParagraphDelimitersInCorpus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('corpus_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.djcorpus')),
                ('paragraph_delimiter_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='upload.djparagraphdelimiter')),
            ],
            options={
                'unique_together': {('corpus_id', 'paragraph_delimiter_id')},
            },
        ),
    ]
