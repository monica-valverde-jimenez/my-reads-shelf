# my-reads-shelf - A website to log my books.

Web application that allows you to select and categorize books you have read, are currently reading, or want to read.

## Pre-requisites
1. Node version 16.13.0
1. npm version 8.1.0
1. yarn 1.22.17

## Step-by-step install guide
1. Install project specific dependencies with `yarn`
1. Run the my-reads-shelf with `yarn start`
1. Test my-reads-shelf is yielding data and not an error with `open http://local.nbc.com:3000/`

## Component Testing

Run `yarn test` to execute the tests.

## Build project
Run `yarn build` to build project.
Run `node ./dist` to run project from build version.

## Package Lock

Package locks packages to specific versions. This information is stored in the `package-lock.json` file.

## Changing/Adding Dependencies

* Make changes to dependencies, via `yarn add [package]` or `yarn remove [package]`.
* If the new package is only required for development environments (e.g. test frameworks) then append `--dev`.
* By default, `yarn.lock` does not update automatically. Whenever you change `package.json`, you must ensure to force an update of the lock file by temporarily disabling `pure-lockfile` in our `.yarnrc` file.

## Troubleshooting

* Make sure you're using the right version of Node by executing `npm version` from the root directory.
* Grab the latest dependencies with `yarn`.
