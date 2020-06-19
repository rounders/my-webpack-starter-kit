# my-webpack-starter-kit

a webpack setup that includes the following:

* handlebars
* sass
* bootstrap
* gh-pages deploy

## Installation

```bash
$ git clone https://github.com/rounders/my-webpack-starter-kir <my-project-name>
$ cd <my-project-name>
$ yarn install
```

## Usage

```bash
# Running

yarn start # this starts the app in development, access at localhost:3000

# Building

yarn build # builds the production version and saves it in dist


# Deploy to github pages

Make sure to adjust the publicPath in webpack.prod.js to your own repository name or to just '/' if using a custom domain with github pages.

yarn deploy # will deploy to github pages
