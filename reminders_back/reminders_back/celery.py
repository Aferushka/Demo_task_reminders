from __future__ import absolute_import
import os
from celery import Celery
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'reminders_back.settings')

app = Celery('reminders_back')
app.config_from_object('reminders_back.celeryconfig')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
