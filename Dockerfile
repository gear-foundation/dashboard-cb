FROM node:18-alpine

WORKDIR /usr/src

COPY . /usr/src

RUN apt update && apt install -y git

RUN yarn install

CMD ["yarn", "vite"]
