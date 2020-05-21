from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.db.session import Base, get_db

from app.core import config
from app.main import app

# engine = create_engine(
#     f"{config.SQLALCHEMY_DATABASE_URI}.test",
# )
# TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base.metadata.create_all(bind=engine)


# def override_get_db():
#     try:
#         db = TestingSessionLocal()
#         yield db
#     finally:
#         db.close()


# app.dependency_overrides[get_db] = override_get_db

# client = TestClient(app)


def test_get_users(client, test_db):
    response = client.get("/api/v1/users")
    assert response.status_code == 200


def test_delete_user(client):
    """TODO"""
    pass


def test_edit_user(client):
    """TODO"""
    pass


def test_get_user(client):
    """TODO: Gets a single user"""
    pass
