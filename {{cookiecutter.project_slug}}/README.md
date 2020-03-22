# {{cookiecutter.project_name}}

## Features
- **FastAPI** with Python 3.8
- **React 16** with Typescript, Redux, and react-router
- Postgres
- SqlAlchemy with Alembic for migrations
- Pytest for backend tests
- Jest for frontend tests
- Eslint (with Airbnb style guide)
- Docker compose for easier development

## Development

The only dependencies for this project should be docker and docker-compose.

### Quick Start
Starting the project with hot-reloading enabled 
(the first time it will take a while):
```
docker-compose up -d
```
- Backend will be at http://localhost:{{cookiecutter.backend_port}}
- Auto-generated docs at 
http://localhost:{{cookiecutter.backend_port}}/docs
- Frontend at http://localhost:{{cookiecutter.frontend_port}}

### Rebuilding containers:
```
docker-compose build
```

### Restarting containers:
```
docker-compose restart
```

### Bringing containers down:
```
docker-compose down
```

### Frontend Development
Alternatively to running inside docker, it can sometimes be easier 
to use npm directly for quicker reloading.  To run using npm:
```
cd frontend
npm install
npm start
```
This should redirect you to http://localhost:3000

### Frontend Tests
```
cd frontend
npm install
npm test
```

## Logging
```
docker-compose logs
```

Or for a specific service:
```
docker-compose logs -f name_of_service # frontend|backend|db
```

## Project Layout
```
backend
└── app
    ├── alembic # database migrations
    ├── api
    │   └── api_v1
    │       └── endpoints
    ├── core    # config
    ├── db      # db models
    ├── tests   # pytest
    └── main.py # entrypoint to backend

frontend
└── public
└── src
    ├── components
    │   └── Home.tsx
    ├── config
    │   └── index.tsx   # constants
    ├── __tests__
    │   └── test_home.tsx
    ├── index.tsx   # entrypoint
    └── App.tsx     # handles routing
```