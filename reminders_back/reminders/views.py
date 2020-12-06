from rest_framework import viewsets
from .models import Reminder
from .serializers import ReminderSerializer


class ReminderViewSet(viewsets.ModelViewSet):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer


    # def create(self, request, *args, **kwargs):
    #     print(request)