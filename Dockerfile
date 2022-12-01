# Declare the base image
FROM node:alpine

# Build step

# 1. copy package.json and package-lock.json to /app dir
RUN mkdir /app

COPY package*.json /app

COPY yarn.lock ./app

# COPY ENV variable
COPY .env ./app

# 2. Change working directory to newly created app dir
WORKDIR /app

# 3. Copy the source code to /app dir
COPY . .

# 4 . Install dependencies
RUN yarn install

# 5. Expose port 5173 on the container
EXPOSE 5173

# 6. Run the app
CMD yarn dev