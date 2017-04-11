FROM node:latest

RUN groupadd -r nodejs \
   && useradd -m -r -g nodejs nodejs

USER nodejs

RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

COPY package.json .
RUN npm install --production

COPY . .

CMD ["npm", "start"]
