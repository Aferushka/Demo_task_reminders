from .models import Reminder
from rest_framework.serializers import ModelSerializer


class ReminderSerializer(ModelSerializer):
    class Meta:
        model = Reminder
        fields = '__all__'