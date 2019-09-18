FROM node:10

WORKDIR /app

ADD . /app/

RUN npm install
RUN npm run build

ENTRYPOINT [ "npm", "start" ]
