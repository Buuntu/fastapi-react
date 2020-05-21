from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_get_users():
    response = client.get("/api/v1/users")
    assert response.status_code == 200


def test_delete_user():
    """TODO"""
    pass


def test_edit_user():
    """TODO"""
    pass


def test_get_user():
    """TODO: Gets a single user"""
    pass
