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