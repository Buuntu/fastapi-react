# FastAPI + React Template · [![CircleCI](https://circleci.com/gh/Buuntu/fastapi-react.svg?style=shield)](https://circleci.com/gh/Buuntu/fastapi-react) [![license](https://img.shields.io/github/license/peaceiris/actions-gh-pages.svg)](LICENSE) [![Dependabot Status](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com)

This project serves as a template for bootstrapping a FastAPI
project using the following tools:

1. **FastAPI** (Python 3.8)
2. **React** (with Typescript)
3. **Postgres**
4. **SqlAlchemy**
5. **Alembic**
6. **Pytest**
7. **Prettier**/**ESLint** (Airbnb style guide)
8. **Docker**

It is meant as a lightweight/React alternative to
[FastAPI's official fullstack project](https://github.com/tiangolo/full-stack-fastapi-postgresql).
Most of the boilerplate backend code is taken from this project
or the [FastAPI official docs](https://fastapi.tiangolo.com/).
This is mainly setup to help with development (not production),
including hot reloading for both React and FastAPI.

This does not have any opinions on production settings and leaves
that up to the user.

## Project Setup

First, install cookiecutter:

```
pip install cookiecutter
```

In the directory you want your project to live:

```
cookiecutter gh:Buuntu/fastapi-react
```

This will ask for the following variables to be set:

- project_name [default fastapi-react]
- project_slug [default fastapi-react]
- port [default 8000]
- postgres_user [default postgres]
- postgres_password [default password]

and will create a directory called whatever you set for
`project_slug`.

# Run in Development

Change into your project directory and then run:

```
docker-compose up -d
```

This will take a little while to build the first time it's run.

Once this finishes you can navigate to the port set during setup
(default is `localhost:8000`), you should see the default
create-react-app.

Navigate to the port set for the backend
(default is `localhost:8888`) and you should see:

```
{ "message": "Hello World" }
```
