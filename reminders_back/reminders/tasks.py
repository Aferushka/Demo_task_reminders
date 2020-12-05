from celery import shared_task


@shared_task
def try_task():
    print('Its working!')