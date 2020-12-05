from __future__ import absolute_import
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'reminders_back.settings')

app = Celery('reminders_back')
app.config_from_object('reminders_back.celeryconfig')
app.autodiscover_tasks()

app.conf.beat_schedule = {
    'test_task_10_sec': {
        'task': 'reminder.tasks.try_task',
        'schedule': 5.0,
        'args': ()
    }
}

