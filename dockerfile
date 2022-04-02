FROM node:12.2.0

COPY package.json /app/package.json
RUN npm install

COPY . /app

