# Contributing

## Development

### Helper Scripts

You can use the helper script `scripts/dev-project.sh` to create a cookiecutter
project to test locally. Do this from outside of the root directory to avoid
accidentally commiting test builds. For example:

```bash
./fastapi-react/scripts/dev-project.sh
```

This will then create a `dev-fastapi-react` directory.

```bash
cd dev-fastapi-react
docker-compose up -d
```

When developing locally, there is also a helper script that will create a cookiecutter directory, build containers, and run tests all from within the root project directory. This can be kind of a tedious process with cookiecutter so this makes it somewhat less painful. From the root `fastapi-react` directory, simply run:

```bash
./scripts/test_local.sh
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
this incrementally. A big PR is much less likely to be approved

## Linting

Please run Black code formatter on the backend code and Prettier on the frontend
code. Take a look at [the Github action](.github/workflows/config.yml) for an example of this.

## Where to Start

Start by browsing through the [list of issues](https://github.com/Buuntu/fastapi-react/issues), particularly those flagged as [help wanted](https://github.com/Buuntu/fastapi-react/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22).
