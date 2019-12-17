FROM node:10-alpine  as uiBuildContainer
WORKDIR /usr/app
# Install node modules
COPY package*.json ./
# Disable SSL
# RUN npm config set registry="http://registry.npmjs.org/"
RUN npm config set strict-ssl false 
RUN npm set progress=true && npm config set depth 0
RUN npm install --production && npm install node-sass
# install application
COPY . ./
RUN npm run build


FROM nginx:alpine
COPY --from=uiBuildContainer ./usr/app/dist/browser /app
COPY --from=uiBuildContainer ./usr/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=uiBuildContainer ./usr/app/mime.types /etc/nginx/mime.types
COPY --from=uiBuildContainer ./usr/app/gzip.conf /etc/nginx/gzip.conf

EXPOSE  4000/tcp