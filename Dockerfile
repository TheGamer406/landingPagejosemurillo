FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

RUN rm -rf .astro

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
