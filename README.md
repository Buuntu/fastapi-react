# FastAPI + React Template · [![CircleCI](https://circleci.com/gh/Buuntu/fastapi-react.svg?style=shield)](https://circleci.com/gh/Buuntu/fastapi-react) [![license](https://img.shields.io/github/license/peaceiris/actions-gh-pages.svg)](LICENSE) [![Dependabot Status](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com)

This project serves as a template for bootstrapping a FastAPI project using the
following tools:

1. **[FastAPI](https://fastapi.tiangolo.com/)** (Python 3.8)
2. **[React](https://reactjs.org/)** (with Typescript)
3. **Postgres**
4. **[SqlAlchemy](https://www.sqlalchemy.org/)**
5. **[Alembic](https://alembic.sqlalchemy.org/en/latest/)**
6. **[Pytest](https://docs.pytest.org/en/latest/)**
7. **[Prettier](https://prettier.io/)**/**[ESLint](https://eslint.org/)**
   (Airbnb style guide)
8. **Docker**
9. **Nginx** as a reverse proxy to allow backend/frontend on the same port
10. [**MaterialUI**](https://material-ui.com/) for styling
11. [**react-admin**](https://github.com/marmelab/react-admin) for the admin
    dashboard

It is meant as a lightweight/React alternative to [FastAPI's official fullstack
project](https://github.com/tiangolo/full-stack-fastapi-postgresql). Most of the
boilerplate backend code is taken from this project or the [FastAPI official
docs](https://fastapi.tiangolo.com/). This is mainly setup to help with
development (not production), including hot reloading for both React and
FastAPI.

This does not have any opinions on production settings and leaves that up to the
user.

## Quick Start

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

and will create a directory called whatever you set for `project_slug`.

## Run in Development

Change into your project directory and then run:

```bash
docker-compose up -d
docker-compose run --rm backend alembic upgrade head
```

This will take a little while to build the first time it's run.

Once this finishes you can navigate to the port set during setup (default is
`localhost:8000`), you should see the default create-react-app:

![default create-react-app](assets/create-react-app.png)

*Note: If you see an Nginx error at first with a `502: Bad Gateway` page, you
may  have to wait for webpack to build the development server (the nginx
container builds much more quickly).*

The backend docs will be at http://localhost:8000/api/docs by default.

Backend routes will be at http://localhost:8000/api by default.

## Admin Dashboard

This project uses [react-admin](https://marmelab.com/react-admin/) for a highly
configurable admin dashboard.

After starting the project, navigate to `http://localhost:8000/admin`.  By
default you should see a list of users, which you can edit, add, and delete.
These are all based off of the `users` routes.

![React Admin Dashboard](assets/admin-dashboard.png)

Routes are kept in the `frontend/src/admin` by default to keep them separate
from regular frontend routes.

## Contributing

Contributing to this project is encouraged.  Please read the [Contributing
doc](CONTRIBUTING.md) first.