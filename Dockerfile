FROM node:18-alpine
#creating working directory
WORKDIR /app

#copying files
COPY package*.json ./

#installing dependencies
RUN npm install

#copying source code
COPY . .

#exposing port
EXPOSE 3000

#starting the application
CMD ["npm", "start"]
