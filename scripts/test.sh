#! /usr/bin/env bash

# Exit in case of error
set -e

# Run this from the root of the project
cookiecutter --no-input -f ./ project_slug="testing-project"

cd testing-project

docker-compose build
docker-compose down -v --remove-orphans
docker-compose up -d
# Run migrations first
docker-compose run --rm backend alembic upgrade head

# Backend/frontend tests
./scripts/test.sh

# Cleanup
docker-compose down -v --remove-orphans

# only remove directory if running locally
if [[ -z "$CIRCLE_CI_ENV" ]]; then
    echo "empty"
    cd ..
    rm -rf testing-project
fi
