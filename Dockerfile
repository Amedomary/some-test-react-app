FROM node:17-alpine

COPY . /app
WORKDIR /app
RUN npm install && npm run build

CMD ["npm", "start"]
