#!/bin/bash

# Exit in case of error
set -e

# Build and run containers
docker-compose up -d

# Wait 10 seconds for postgres service to appear on port 5432, then run alembic migrations
extern/wait-for-it/wait-for-it.sh postgres:5432 --strict --timeout=10 \
    -- docker-compose run --rm backend alembic upgrade head

# Create initial data
docker-compose run --rm backend python3 app/initial_data.py