FROM node:13.12.0-alpine

EXPOSE 3100

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent && \
    npm install react-scripts@3.4.1 -g --silent && \
    echo "Europe/Moscow" > /etc/timezone

COPY . ./

CMD ["npm", "start"]