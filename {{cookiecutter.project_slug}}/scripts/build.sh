#!/bin/bash

# Build and run containers
docker-compose up -d

# Run migrations
docker-compose run --rm backend alembic upgrade head

# Create initial data
docker-compose run --rm backend python3 app/initial_data.py