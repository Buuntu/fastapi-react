from app.core import security


def test_login(client, test_user, monkeypatch):
    def verify_password_mock(first: str, second: str):
        return True

    monkeypatch.setattr(security, "verify_password", verify_password_mock)

    response = client.post(
        "/api/token",
        data={"username": test_user.email, "password": "nottheactualpass"},
    )
    assert response.status_code == 200


def test_signup(client):
    response = client.post(
        "/api/signup",
        data={"username": 'some@email.com', "password": "randompassword"},
    )
    assert response.status_code == 200

    # Try again with same credentials
    response = client.post(
        "/api/signup",
        data={"username": 'some@email.com', "password": "randompassword"},
    )
    assert response.status_code == 403
    

def test_wrong_password(
    client, test_db, test_user, test_password, monkeypatch
):
    def verify_password_failed_mock(first: str, second: str):
        return False

    monkeypatch.setattr(
        security, "verify_password", verify_password_failed_mock
    )

    response = client.post(
        "/api/token", data={"username": test_user.email, "password": "wrong"}
    )
    assert response.status_code == 401


def test_wrong_login(client, test_db, test_user, test_password):
    response = client.post(
        "/api/token", data={"username": "fakeuser", "password": test_password}
    )
    assert response.status_code == 401
