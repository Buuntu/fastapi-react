#!/bin/bash

cd "$(dirname "$0")"
cd ..
current_dir=`pwd`
cd ..
./fastapi-react/scripts/dev-project.sh
cd fastapi-react-dev
docker-compose down -v --remove-orphans
./scripts/build.sh
./scripts/test.sh
# cd $current_dir