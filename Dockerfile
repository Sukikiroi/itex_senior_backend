# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY . .

# Install dependencies
 
RUN npm install



# Copy all the files from the current directory to the container
COPY . .

# Expose the port on which the Nest.js application will run
EXPOSE 3000

# Start the Nest.js application
CMD ["npm", "run", "start:dev"]
