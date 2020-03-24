#! /usr/bin/env bash

docker-compose run backend pytest
docker-compose run frontend test