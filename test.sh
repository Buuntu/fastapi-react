#! /usr/bin/env bash

# Exit in case of error
set -e

cookiecutter --no-input -f gh:Buuntu/fastapi-react

cd fastapi-react

./scripts/test.sh

docker-compose build
docker-compose down -v --remove-orphans
docker-compose up -d
#./scripts/test.sh # doesn't work in circle CI for some reason
docker-compose down -v --remove-orphans

cd ..

rm -rf fastapi-react