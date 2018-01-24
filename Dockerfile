FROM node:8-alpine as builder

RUN mkdir /tmp/app
WORKDIR /tmp/app

COPY package.json /tmp/app
RUN npm install
RUN mkdir /app 
RUN cp -R ./node_modules /app

WORKDIR /app 

COPY . .
