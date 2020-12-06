# js-cpu-rimac

A lightweight CPU reader in place of an automobile vehicle. Serves as a machine module with relevant diagnostics for (personal) M2M project for Rimac.

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

Copy content from `.env.example` to `.env`

| variable           | description                              | required                                                                                                                         |
| :----------------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `FIREBASE_API`     | URL to firebase realtime database        | true                                                                                                                             |
