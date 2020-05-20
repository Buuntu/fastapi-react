# Contributing

## Development

You can use the helper script `scripts/dev-project.sh` to create a cookiecutter
project to test locally.  Do this from outside of the root directory to avoid
accidentally commiting test builds.  For example:
```bash
./fastapi-react/scripts/dev-project.sh
```

This will then create a `dev-fastapi-react` directory.
```bash
cd dev-fastapi-react
docker-compose up -d
```

## Pull Requests

Use the general [feature branch
workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
for development. After a feature is complete, make a pull request and wait for 1
approval before merging.

Try to keep PRs as small and focused as possible. If you are making a big
breaking change in production and don't want to expose half finished
functionality to users, you can use [feature
flags](https://www.martinfowler.com/articles/feature-toggles.html) to work on
this incrementally.  A big PR is much less likely to be approved