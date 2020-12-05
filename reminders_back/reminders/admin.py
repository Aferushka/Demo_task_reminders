from django.contrib import admin
from .models import Reminder, ChatId

admin.site.register((Reminder, ChatId))
