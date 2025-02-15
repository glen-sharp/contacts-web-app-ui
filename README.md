# Contacts Hub UI
User interface using the React framework exposing contacts information.

## Features
The application allows a user to add, delete and view their contacts. The application is integrated with an API that exposes this data

## Deploying UI locally

```bash
npm install

npm run build

npm start
```

## Deploying UI via Docker Image

```bash
docker build . -t contacts-ui

docker run -p 3000:80 contacts-ui:latest
```