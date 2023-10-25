FROM node:14

WORKDIR /app

COPY . /app

RUN npm install

<<<<<<< HEAD
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
=======
EXPOSE 3000

CMD ["npm", "start"]
>>>>>>> 9fcc9e10b4f894571f2e4795d498013fa4c23f0d
