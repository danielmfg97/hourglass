FROM node:19.4.0-alpine3.17

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@9.0.0

USER node

WORKDIR /home/node/app