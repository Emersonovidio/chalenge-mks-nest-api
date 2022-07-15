FROM node:14-alpine AS todobackend
EXPOSE 3001
WORKDIR /back-end
ADD node_modules.tar.gz ./todo-app/back-end
COPY . .
ENTRYPOINT [ "npm", "start" ]