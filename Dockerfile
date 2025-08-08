# Etapa 1: build con Node.js
FROM node:18-alpine AS build

WORKDIR /app

# Copiar archivos para instalar dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiar todo el proyecto (incluye src y public)
COPY . .

# Permitir pasar variable para build (ejemplo: VITE_API_URL)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Ejecutar build (tsc + vite build)
RUN npm run build

# Etapa 2: servir con nginx
FROM nginx:alpine

# Copiar build estático
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuración custom nginx para soporte variables runtime
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar script que genera archivo env.js en runtime
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]