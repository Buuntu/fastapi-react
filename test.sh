#! /usr/bin/env bash

# Exit in case of error
set -e

cookiecutter --no-input -f gh:Buuntu/fastapi-react

cd fastapi-react

docker-compose build
docker-compose down -v --remove-orphans
docker-compose up -d
docker-compose run backend pytest
docker-compose run frontend test -run
docker-compose down -v --remove-orphans

cd ..

rm -rf fastapi-react