#!/usr/bin/env python3

from app.db.session import get_db
from app.db.crud import create_user
from app.db.schemas import UserCreate
from app.db.session import SessionLocal


def init() -> None:
    db = SessionLocal()

    create_user(
        db,
        UserCreate(
            email="{{cookiecutter.initial_user_email}}",
            password="{{cookiecutter.initial_user_password}}",
            is_active=True,
        ),
    )


if __name__ == "__main__":
    print("Creating initial user {{cookiecutter.initial_user_email}}")
    init()
    print("Initial user created")
