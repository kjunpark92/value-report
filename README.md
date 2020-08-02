# doonesbury

> XAI Land frontend application for flagship products

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



# More instructions and notes

## Residential Structure

For residential, the main points are in /main/residential/index and cycle through the steps based on state in viewModule. This means at the end of each part of the users experience, various components become either visible or hidden.