#!/usr/bin/env python3

from app.core import config
from app.db.session import get_db
from app.db.crud import create_user
from app.db.schemas import UserCreate
from app.db.session import SessionLocal


def init() -> None:
    db = SessionLocal()

    create_user(
        db,
        UserCreate(
            email=config.SUPERUSER_EMAIL,
            password=config.SUPERUSER_PASSWORD,
            is_active=True,
            is_superuser=True,
        ),
    )


if __name__ == "__main__":
    print(f"Creating superuser {config.SUPERUSER_EMAIL}")
    init()
    print("Superuser created")
