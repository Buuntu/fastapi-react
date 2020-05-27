#! /usr/bin/env bash

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
