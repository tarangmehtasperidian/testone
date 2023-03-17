FROM node:lts-alpine

WORKDIR /app
COPY . .
#Install packages
RUN npm i -g aws-cdk typescript