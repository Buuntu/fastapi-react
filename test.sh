#! /usr/bin/env bash

# Exit in case of error
set -e

cookiecutter --no-input -f gh:Buuntu/fastapi-react

cd fastapi-react

docker-compose build
docker-compose down -v --remove-orphans
docker-compose up -d
./scripts/test.sh
docker-compose down -v --remove-orphans

# only remove directory if running locally
if [[ -z "$CIRCLE_CI_ENV" ]]; then
    echo "empty"
    cd ..
    rm -rf fastapi-react
fi
