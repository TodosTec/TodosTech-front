FROM node:14

WORKDIR /app

COPY . /app

RUN npm install
RUN npm i craco
RUN npm i craco-less@2.1.0-alpha.0
RUN npm i react-ionicons
RUN npm i styled-components

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
