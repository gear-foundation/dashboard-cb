FROM node:18-alpine

WORKDIR /usr/src

COPY . /usr/src

RUN apk update && apk add --no-cache git

RUN yarn install

CMD ["yarn", "vite", "--host 0.0.0.0"]
