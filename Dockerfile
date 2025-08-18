# ---------- Build ----------
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Runtime (Nginx) ----------
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

# Copia build
COPY --from=build /app/dist ./

# Config SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Script de arranque para inyectar env en runtime
COPY env.sh /env.sh
# Evita problemas de CRLF en Windows y asegúralo ejecutable
RUN sed -i 's/\r$//' /env.sh && chmod +x /env.sh

EXPOSE 80
CMD ["/bin/sh", "/env.sh"]
