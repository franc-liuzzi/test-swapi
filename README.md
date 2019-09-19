# SWAPI App

You can execute the app in the docker environment. Simply run the command below

```bash
docker-compose run swapi <episode-id>
```

otherwise you can test it (after installing npm dependencies) using node running the following commands:

```bash
npm run build
npm start <episode-id>
```

for DEV environment i used babel-node with the folloing commands:

```bash
npm run start:dev <episode-id>
```
