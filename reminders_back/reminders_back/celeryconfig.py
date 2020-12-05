from __future__ import absolute_import
from django.conf import settings

BROKER_URL = settings.REDIS_URL
CELERY_RESULT_BACKEND = BROKER_URL
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_SEND_EVENTS = True
CELERY_EVENT_QUEUE_EXPIRES = 60
CELERY_ENABLE_UTC = False
CELERY_TIMEZONE = 'Europe/Moscow'

CELERY_BEAT_SCHEDULE = {
    'test_task_every_minute': {
        'task': 'test_task',
        'schedule': 60,
        'args': ()
    }
}
