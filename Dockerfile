# Use an official Node.js runtime as the base image
FROM node:14

# Create a working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the application's port (adjust this based on your Next.js app)
EXPOSE 3000

# Command to start the application
CMD [ "npm", "start" ]
