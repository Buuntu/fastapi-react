#!/bin/bash

# Exit in case of error
set -e

# Move out of top-level dir
cd ..

# Generate local cookiecutter project, bring up in docker and test
./fastapi-react/scripts/dev-project.sh
cd dev-fastapi-react
docker-compose down -v --remove-orphans
./scripts/build.sh
./scripts/test.sh