FROM node:18-alpine

WORKDIR /opt

COPY . /opt

COPY .eslintrc.json /opt

RUN apk update && apk add --no-cache git

RUN yarn global add eslint --dev

RUN yarn install

CMD ["yarn", "vite", "--host", "0.0.0.0"]
