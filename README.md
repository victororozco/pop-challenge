# Prueba Técnica PopEstate

-----------------------------
## OpenAPI Documentation
[View Heroku OpenAPI](https://pop-estate-app.herokuapp.com/docs/)

```bash
http://{{domain}}/docs/
```

## Postman Collection:
[View here](./docs/pop-estate.postman_collection.json)

## Run test
```bash
npm test
```

## Run project
### ... with NPM
```bash
npm start
```

### ... with Docker
```bash
$ docker compose -f docker-compose.local.yml build
$ docker compose -f docker-compose.local.yml up
$ docker compose -f docker-compose.local.yml down
```

### ... dev entorn
```bash
npm run start:dev
```

## env file
```bash
NODE_ENV=dev # dev, production or test
PORT=3001
MONGO_URL=mongodb+srv://<user>:<password>@<mongourl>/<databasename>?retryWrites=true&w=majority
MONGO_URL_TEST=mongodb+srv://<user>:<password>@<mongourl>/<databasenameTEST>?retryWrites=true&w=majority
```

