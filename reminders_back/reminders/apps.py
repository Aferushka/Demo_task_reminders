from django.apps import AppConfig
from .bot import Bot


class RemindersConfig(AppConfig):
    name = 'reminders'

    def ready(self):
        import reminders.signals
        Bot().start()
