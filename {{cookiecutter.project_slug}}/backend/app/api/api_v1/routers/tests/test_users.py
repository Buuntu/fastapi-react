from app.db import models


def test_get_users(client, test_db, test_user):
    response = client.get("/api/v1/users")
    assert response.status_code == 200
    assert response.json() == [
        {
            "id": test_user.id,
            "email": test_user.email,
            "is_active": bool(test_user.is_active),
        }
    ]


def test_delete_user(client, test_user, test_db):
    response = client.delete(f"/api/v1/users/{test_user.id}")
    assert response.status_code == 200
    assert test_db.query(models.User).all() == []


def test_delete_user_not_found(client, test_user, test_db):
    response = client.delete("/api/v1/users/4321")
    assert response.status_code == 404


def test_edit_user(client, test_user, test_db):
    new_user = {
        "email": "newemail@email.com",
        "is_active": False,
        "password": "new_password",
    }

    response = client.put(f"/api/v1/users/{test_user.id}", json=new_user)
    assert response.status_code == 200
    new_user["id"] = test_user.id
    new_user.pop("password")
    assert response.json() == new_user


def test_edit_user_not_found(client, test_user, test_db):
    new_user = {
        "email": "newemail@email.com",
        "is_active": False,
        "password": "new_password",
    }
    response = client.put("/api/v1/users/1234", json=new_user)
    assert response.status_code == 404


def test_get_user(client, test_user, test_db):
    response = client.get(f"/api/v1/users/{test_user.id}")
    assert response.status_code == 200
    assert response.json() == {
        "id": test_user.id,
        "email": test_user.email,
        "is_active": bool(test_user.is_active),
    }


def test_user_not_found(client, test_user, test_db):
    response = client.get("/api/v1/users/123")
    assert response.status_code == 404


def test_unauthenticated_user(client):
    response = client.get("/api/v1/users/me")
    assert response.status_code == 401


def test_authenticated_user(client):
    # TODO
    pass
