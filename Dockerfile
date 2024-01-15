FROM node:18-alpine

WORKDIR /APP/

COPY /src /APP/src
COPY /public /APP/public
COPY package.json /APP


RUN npm install

CMD [ "npm", "start" ]




