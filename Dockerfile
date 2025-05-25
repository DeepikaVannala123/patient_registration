# Use Node.js 18 Alpine as the base image (lightweight)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5173 for the dev server
EXPOSE 5173

# Set the host environment variable to allow external access
ENV HOST=0.0.0.0

# Start the development server with host binding
CMD ["npm", "run", "dev", "--", "--host"]