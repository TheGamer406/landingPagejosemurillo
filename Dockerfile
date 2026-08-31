FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

RUN rm -rf .astro

# --force: si queda un lock de un dev server muerto, lo reemplaza en vez de
# abortar. Sin esto el contenedor entra en bucle de reinicio.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
