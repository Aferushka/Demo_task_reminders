from rest_framework import routers
from .views import ReminderViewSet

router = routers.SimpleRouter()
router.register(r'reminders', ReminderViewSet)

urlpatterns = []

urlpatterns += router.urls