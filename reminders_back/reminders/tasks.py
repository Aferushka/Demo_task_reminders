from celery import task


@task
def try_task():
    print('Its working!')
