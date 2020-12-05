from celery import shared_task
from .models import Reminder, ChatId
from datetime import datetime
from .bot import bot


@shared_task
def reminder_scan():
    call_time = datetime.datetime()
    for reminder in Reminder.objects.all():
        if reminder.date == call_time.date() and reminder.time.hour == call_time.hour and reminder.time.minute == call_time.minute:
            send_reminder.delay(reminder)


@shared_task
def send_reminder(reminder):
    for chat in ChatId.objects.all():
        bot.sendMessage(chat_id=chat.chat_id, text=reminder.text)