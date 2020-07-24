FROM node:12
WORKDIR /usr/src/nodestr
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]