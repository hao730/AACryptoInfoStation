FROM node:lts-alpine as build-stage    
WORKDIR /app
# install vite globally
RUN npm install -g vite
# copy all filtes
COPY . .    
# install all deps
RUN yarn install

# vite default port
EXPOSE 8000    
CMD ["yarn", "run", "dev"]