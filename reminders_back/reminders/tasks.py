from celery import task


@task(name='test_task')
def try_task():
    print('Its working!')
