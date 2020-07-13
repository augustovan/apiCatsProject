FROM node:12.4.0-alpine as debug

WORKDIR /work/

COPY ./package.json /work/package.json
RUN npm install
RUN npm install axios body-parser express mongoose prom-client express
RUN npm install -g nodemon

COPY ./ /work/

ENTRYPOINT [ "nodemon","--inspect=0.0.0.0","./src/index.js" ]

FROM node:12.4.0-alpine as prod

WORKDIR /work/
COPY ./package.json /work/package.json
RUN npm install
COPY ./ /work/

CMD node .