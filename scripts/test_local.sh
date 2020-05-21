current_dir=`pwd`
cd ..
./fastapi-react/scripts/dev-project.sh
cd dev-fastapi-react
docker-compose down -v --remove-orphans
docker-compose up -d
docker-compose run --rm backend alembic upgrade head
./scripts/test.sh
cd $current_dir