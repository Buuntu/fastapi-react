import os

PROJECT_NAME = "{{cookiecutter.project_name}}"

SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")

API_V1_STR = "/api/v1"
