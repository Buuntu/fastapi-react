from celery import Celery

celery_app = Celery("worker", broker="redis://redis:6379/0")

celery_app.conf.task_routes = {"app.tasks.*": "main-queue"}
