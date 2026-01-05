# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copia package files e instala dependências
COPY package*.json ./
RUN npm ci

# Copia o resto dos arquivos e faz build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Remove configuração padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia nossa configuração customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
