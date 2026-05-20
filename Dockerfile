# Stage 1: Build the React app
FROM node:18-slim AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Verify dist directory was created
RUN ls -la /app/dist && echo "Build successful!"

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Install curl for healthcheck
RUN apk add --no-cache curl

# Remove default nginx config and files
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx server config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Verify files are copied
RUN ls -la /usr/share/nginx/html

# Expose ports (80 and 7860)
EXPOSE 80 7860

# Add healthcheck probing both ports (try 7860 first, then 80)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD sh -c 'curl -fsS http://localhost:7860/ || curl -fsS http://localhost/ || exit 1'

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
