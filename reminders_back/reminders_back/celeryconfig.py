from __future__ import absolute_import

BROKER_URL = 'redis://redis:6379/0'
CELERY_RESULT_BACKEND = BROKER_URL
# CELERY_ACCEPT_CONTENT = ['json']
# CELERY_TASK_SERIALIZER = 'json'
# CELERY_RESULT_SERIALIZER = 'json'
# CELERY_SEND_EVENTS = True
# CELERY_EVENT_QUEUE_EXPIRES = 60
# CELERY_ENABLE_UTC = False
CELERY_TIMEZONE = 'Europe/Moscow'

