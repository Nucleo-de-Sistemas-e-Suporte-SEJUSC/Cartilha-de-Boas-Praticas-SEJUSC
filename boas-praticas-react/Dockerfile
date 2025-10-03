# Estágio 1: Construção da aplicação
FROM node:20-alpine AS build

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de definição de pacotes
COPY package.json package-lock.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os outros arquivos do projeto
COPY . .

# Executa o script de build para gerar os arquivos estáticos
RUN npm run build

# Estágio 2: Servidor de produção
FROM nginx:stable-alpine

# Copia os arquivos estáticos gerados no estágio de build para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 para permitir o acesso à aplicação
EXPOSE 80

# Comando para iniciar o servidor Nginx quando o contêiner for executado
CMD ["nginx", "-g", "daemon off;"]