FROM node:16.10-slim

COPY package*.json .

COPY src src
COPY index.js index.js
COPY public public

RUN npm ci

EXPOSE 3000

CMD [ "node", "index.js" ]