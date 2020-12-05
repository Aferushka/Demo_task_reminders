FROM python:3.8

EXPOSE 8000
EXPOSE 10112

ENV PYTHONBUFFERED=1

WORKDIR /code

COPY . .

RUN chmod -R 777 /code && \
    pip3 install --no-cache-dir -r requirements.txt && \
    python3 manage.py collectstatic --no-input && \
    echo "Europe/Moscow" > /etc/timezone

ENV DJANGO_SETTINGS_MODULE reminders_back.settings

CMD bash -c "python3 manage.py makemigrations && \
             python3 manage.py migrate --skip-checks && \
             python3 manage.py runserver 0.0.0.0:8000"