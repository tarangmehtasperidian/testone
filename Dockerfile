FROM node:lts-alpine

WORKDIR /app
COPY . .
#Install packages
RUN npm i -g aws-cdk @aws-cdk/aws-s3 @aws-cdk/aws-apigateway @aws-cdk/aws-lambda typescript
