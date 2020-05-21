from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.db.session import Base, get_db

from app.core import config
from app.main import app
from app.db import models


def test_get_users(client, test_db):
    response = client.get("/api/v1/users")
    assert response.status_code == 200
    assert response.json() == []


def test_delete_user(client, test_user, test_db):
    response = client.delete(f"/api/v1/users/{test_user.id}")
    assert response.status_code == 200
    assert test_db.query(models.User).all() == []


def test_edit_user(client):
    """TODO"""
    pass


def test_get_user(client):
    """TODO: Gets a single user"""
    pass
