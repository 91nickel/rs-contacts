FROM node:18

RUN mkdir /tmp/app
WORKDIR /tmp/app

RUN git clone https://github.com/91nickel/rs-contacts.git .
RUN npm i && npm run build

WORKDIR /tmp/app/server
RUN npm i

RUN mv /tmp/app/server /app \
    && mv /tmp/app/build /app/build \
    && mv /tmp/app/public /app/public \
    && rm -rd /tmp/app

EXPOSE 3000

WORKDIR /app

CMD ["node", "/app/index.js"]

