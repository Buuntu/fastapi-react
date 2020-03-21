#! /usr/bin/env bash

# Exit in case of error
set -e

cookiecutter --no-input -f gh:Buuntu/fastapi-react

rm -rf fastapi-react