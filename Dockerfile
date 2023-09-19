FROM node:18-alpine

WORKDIR /usr/src

COPY . /usr/src

RUN apk update && apk install -y git

RUN yarn install

CMD ["yarn", "vite"]
