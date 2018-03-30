# Helpdesk

This is a static helpdesk site generated using [GatsbyJS](https://www.gatsbyjs.org).

## Writing new articles
Add articles in markdown format to the `/src/articles` folder. These are statically generated on build. 
For now, use the format of the existing example articles.

## Usage

### Development

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

Then you can run it by:

```sh
yarn develop
```

Then visit http://localhost:8000

### GraphQL

Test GraphQL queries by visiting http://localhost:8000/___graphql

### Storybook

View patterns using storybook:

```sh
yarn storybook
```

Then visit http://localhost:9001

### Linting

Lint all:

```sh
yarn lint
```

Lint JS only:

```sh
yarn lint:js
```
