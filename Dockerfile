FROM node:12

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY ./ ./

EXPOSE 8000

RUN yarn build

CMD ["node", "./build"]