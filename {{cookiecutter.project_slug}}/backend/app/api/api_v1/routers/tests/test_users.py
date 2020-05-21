from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.db.session import Base, get_db

from app.core import config
from app.main import app
from app.db import models


def test_get_users(client, test_db, test_user):
    response = client.get("/api/v1/users")
    assert response.status_code == 200
    assert response.json() == [{
        'id': test_user.id,
        'email': test_user.email,
        'is_active': bool(test_user.is_active),
    }]


def test_delete_user(client, test_user, test_db):
    response = client.delete(f"/api/v1/users/{test_user.id}")
    assert response.status_code == 200
    assert test_db.query(models.User).all() == []


def test_edit_user(client, test_user, test_db):
    """TODO"""
    pass


def test_get_user(client, test_user, test_db):
    response = client.get(f"/api/v1/users/{test_user.id}")
    assert response.status_code == 200
    assert response.json() == {
        'id': test_user.id,
        'email': test_user.email,
        'is_active': bool(test_user.is_active),
    }


def test_user_not_found(client, test_user, test_db):
    response = client.get("/api/v1/users/123")
    assert response.status_code == 404
