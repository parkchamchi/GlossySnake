# Generated by Django 4.1.7 on 2024-05-09 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('upload', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='status',
            field=models.CharField(choices=[('READY', 'Ready'), ('RUNNING', 'Running'), ('FINISHED', 'Finished'), ('ERROR', 'Error'), ('ABORTED', 'Aborted')], default='READY', max_length=16),
        ),
    ]
