FROM node:14

WORKDIR /app

COPY . /app

RUN npm install
RUN npm i craco-less@2.1.0-alpha.0

CMD ["npm", "start"]
