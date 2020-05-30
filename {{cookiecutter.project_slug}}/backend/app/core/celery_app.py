from celery import Celery

celery_app = Celery("worker", broker="redis://redis:6379/0")
