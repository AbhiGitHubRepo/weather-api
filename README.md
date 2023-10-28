
## Description

This API will provide the current climate condition based on user input

## Documentation - swagger

http://localhost:3333/api-docs


## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov

```
## Docker commands

docker build .\weather-api\ -t abhi/weather-api

docker run -p 8080:3333 abhi/weather-api