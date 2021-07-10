FROM node:13.12.0-alpine

WORKDIR /api
COPY package.json .
RUN npm install --silent

EXPOSE 3333
CMD ["npm", "start"]