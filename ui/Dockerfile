FROM node:18-alpine3.16

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm","run","start"]
