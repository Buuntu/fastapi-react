# FastAPI + React Template
[![CircleCI](https://circleci.com/gh/Buuntu/fastapi-react.svg?style=svg)](https://circleci.com/gh/Buuntu/fastapi-react)

This project serves as a template for bootstrapping FastAPI project using
the following tools:

1) FastAPI
2) React
3) Postgres
4) SqlAlchemy
5) Alembic
6) Typescript
7) Redux
8) Styled-components

It is meant as a lightweight/React alternative to 
[FastAPI's official fullstack project](https://github.com/tiangolo/full-stack-fastapi-postgresql)

## Project Setup

First, install cookiecutter if you haven't:
```
pip install cookiecutter
```

In the directory you want your project to live:
```
cookiecutter gh:Buuntu/fastapi-react
```

It will ask for the following variables to be set:
- project_name [default fastapi-react]
- project_slug [default fastapi-react]
- frontend_port [default 8888]
- backend_port [default 8000]
- postgres_user [default postgres]
- postgres_password [default password]

This will create a directory called whatever you set for
`project_slug`.

# Run in Development
```
# change this directory with whatever you set as project_slug
cd fastapi-react

docker-compose up -d
```
This will take a little while the first time it's run.

Once this finishes you can navigate to the port set during setup 
(default is `localhost:8000`), you should see the default
create-react-app.

Navigate to the port set for the backend 
(default is `localhost:8888`) and you should see:
```
{ "message": "Hello World" }
```