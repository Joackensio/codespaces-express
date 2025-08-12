# Imagen base de Node
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Puerto que va a exponer el contenedor
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "index.js"]
