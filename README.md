# js-cpu-rimac

A lightweight SysInfo reader in place of an automobile vehicle. Serves as a machine module with relevant diagnostics for (personal) M2M project for Rimac. Goes along with [js-web-rimac](https://github.com/AntonioErdeljac/js-web-rimac)

### CI / CD
![Node.js CI](https://github.com/AntonioErdeljac/js-cpu-rimac/workflows/Node.js%20CI/badge.svg)

### Lint
[![eslint: airbnb](https://img.shields.io/badge/Eslint-Airbnb-red?logo=airbnb&style=flat)](https://github.com/airbnb/javascript)
[![commitlint: conventional](https://img.shields.io/badge/Commitlint-Conventional-red?logo=commitlint&style=flat)](https://github.com/conventional-changelog/commitlint)
[![code style: prettier](https://img.shields.io/badge/Code%20Style-Prettier-red?logo=prettier&style=flat)](https://github.com/prettier/prettier)

### Test
[![testing: Jest](https://img.shields.io/badge/Tests-Jest-red?logo=jest&style=flat)](https://github.com/facebook/jest)

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/js-cpu-rimac.git
```

### Install packages


```shell
npm i
```

### Available commands

Running commands with npm `npm run [command]`

**Make sure to start your terminal in administrator mode**

| command            | description                                                                                                 |
| :----------------- | :---------------------------------------------------------------------------------------------------------- |
| `start`            | Starts a development instance of the app                                                                    |
| `test`             | Runs unit tests in default mode                                                                             |
| `test:watch`       | Runs unit tests in watch mode                                                                               |
| `test:ci`          | Runs unit tests                                                                                             |
| `lint`             | Lints all relevant project files                                                                            |
| `lint:fix`         | Lints all relevant project files and fixes as much as automatically possible                                |


### Environment variables

Copy content from `.env.example` to `.env`, firebase variables must correspond to [js-web-rimac](https://github.com/AntonioErdeljac/js-web-rimac)

| variable                                     | required                           |
| :------------------------------------------- | :----------------------------------|
| `FIREBASE_API_KEY`                 | true                               |
| `FIREBASE_AUTH_DOMAIN`             | true                               |
| `FIREBASE_DATABASE_URL`            | true                               |
| `FIREBASE_PROJECT_ID`              | true                               |
| `FIREBASE_STORAGE_BUCKET`          | true                               |
| `FIREBASE_MESSAGING_SENDER_ID`     | true                               |
| `FIREBASE_APP_ID`                  | true                               |
| `FIREBASE_MEASUREMENT_ID`          | true                              
