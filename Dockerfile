FROM node:18

RUN mkdir /app

#COPY . /app
#WORKDIR /app
#RUN npm ci && npm run build

WORKDIR /app
COPY ./build /app
