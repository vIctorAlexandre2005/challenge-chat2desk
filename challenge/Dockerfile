# Use a imagem oficial do Node.js como base
FROM node:18 AS builder

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de configuração do projeto para o contêiner
COPY package*.json ./
RUN yarn install

# Copie todo o restante do código da aplicação para o contêiner
COPY . .

# Construa a aplicação
RUN yarn build

# Use uma imagem menor para o runtime
FROM node:18-slim

WORKDIR /app

# Copie os arquivos necessários do estágio de construção
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./
COPY --from=builder /app/public ./

RUN yarn install --production

# Exponha a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
