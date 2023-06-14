from app.core.celery_app import celery_app


@celery_app.task(acks_late=True)
def example_task(word: str) -> str:
    return f"test task returns {word}"
