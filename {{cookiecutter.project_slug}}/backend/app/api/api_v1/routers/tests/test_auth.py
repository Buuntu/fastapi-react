
def test_login(client, test_db, test_user, test_password):
    response = client.post(
        "/api/token",
        data={"username": test_user.email, "password": test_password},
    )
    assert response.status_code == 200


def test_wrong_password(client, test_db, test_user, test_password):
    response = client.post(
        "/api/token", data={"username": test_user.email, "password": "wrong"}
    )
    assert response.status_code == 401


def test_wrong_login(client, test_db, test_user, test_password):
    response = client.post(
        "/api/token", data={"username": "fakeuser", "password": test_password}
    )
    assert response.status_code == 401
