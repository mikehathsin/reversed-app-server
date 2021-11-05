# Reversed App - Server

## Server is up ✨

https://reversed-app-server.herokuapp.com/iecho?text=ana

## Route

> GET /iecho?text={{param}}

## How to run it?

- Install dependencies with

  `yarn`

  or

  `npm install`

- then run the project with

  `yarn dev`

## How do I run the tests?

- With the dependencies installed run

  `yarn test`

  or

  `npm test`

- Additionally you can see the coverage by executing

  `yarn test:coverage`

  or

  `npm test:coverage`

## Is there support for docker?

- Of course. Build the image with

  `docker build . -t mikehathsin/reversed-app-server`

- and then

  `docker run -p 8000:8000 -d mikehathsin/reversed-app-server`
