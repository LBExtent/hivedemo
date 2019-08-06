# Laksh's Demo Project

This project utilises several modern technologies to create a full stack application

## Getting Started

Get up and running! Clone the repo!

### Prerequisites

You need to have following installed on your system

- Docker

### Installing

####To run a local development envrionment

Please use following command from root directory to run development containers

```
docker-compose -f .docker/docker-compose.dev.yml up --build
```

####To run a local production environment

Ensure you have a .env file in your .docker folder with relevant variables, use this template for guidance

```
# .env
MONGO_URI=
PORT=
MONGO_PORT=
MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=
NODE_ENV=
```

Please use following command from root directory to run production containers

```
set -a && source .docker/.env && docker-compose -f .docker/docker-compose.test.yml up --build
```
