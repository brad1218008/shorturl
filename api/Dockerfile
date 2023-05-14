FROM node:18-alpine3.16

WORKDIR /app

COPY src/. ./src
COPY package*.json ./
COPY index.ts ./
COPY datasource.ts ./
COPY tsconfig.json ./
COPY .env ./

RUN npm install
RUN mkdir logs

EXPOSE 8081

CMD ["npm","run","start:prod"]