from django.db import models
import datetime


class Reminder(models.Model):
    text = models.TextField(verbose_name='Текст напоминания')
    date = models.DateField(verbose_name='Дата напоминания')
    time = models.TimeField(verbose_name='Время напоминания', default=datetime.time(8, 00))

    class Meta:
        verbose_name = 'Напоминание'
        verbose_name_plural = 'Напоминания'

    def __str__(self):
        return f'{self.text}: {self.date} {self.time}'