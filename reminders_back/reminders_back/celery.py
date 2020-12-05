from __future__ import absolute_import
import os
from celery import Celery
from django.conf import settings
from reminders.tasks import try_task

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'reminders_back.settings')

app = Celery('reminders_back')
app.config_from_object('reminders_back.celeryconfig')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)


@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    sender.add_periodic_task(10, try_task(), name='test task 10 sec')
