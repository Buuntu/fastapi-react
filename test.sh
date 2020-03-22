#! /usr/bin/env bash

# Exit in case of error
set -e

cookiecutter --no-input -f gh:Buuntu/fastapi-react

# cd fastapi-react

# sudo docker-compose build
# sudo docker-compose down -v --remove-orphans
# sudo docker-compose up -d
# sudo docker-compose down -v --remove-orphans

# cd ..

# rm -rf fastapi-react