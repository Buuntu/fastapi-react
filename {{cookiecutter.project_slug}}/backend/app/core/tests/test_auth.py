from app.core import security


def test_scope_superuser(client, superuser_token_headers, monkeypatch):
    def verify_password_mock(first: str, second: str):
        return True

    monkeypatch.setattr(security, "verify_password", verify_password_mock)
    response = client.get("api/v1/users", headers=superuser_token_headers)

    assert "admin" in response.headers["bearer"]
