FROM node:12

EXPOSE 3002
COPY ["./package.json", "./package-lock.json", "/nikita/app/"]
WORKDIR /nikita/app
RUN npm ci --quiet
COPY ./src /nikita/app/src

CMD npm start
