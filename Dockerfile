FROM  node
#using official image of Node.js

WORKDIR /app
#it sets working directory to /app in the container

COPY package.json .
#it copies the pakage.json filr from the local machine to the /app directory

RUN npm install 
#this command will install needed dependencies

ENV ENV_MODE=local

COPY . .
#it copies the entier current directory to /app directory

EXPOSE  3000

CMD ["npm", "start"]
#it starts node.js application
