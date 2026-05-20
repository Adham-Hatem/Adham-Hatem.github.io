# Docker Deployment Guide

## Building the Docker Image

To build the Docker image for deployment to Happyface:

```bash
docker build -t my-website:latest .
```

## Running Locally

To test the container locally:

```bash
# Using Docker directly
docker run -p 3000:80 my-website:latest

# Or using Docker Compose
docker-compose up
```

The app will be available at `http://localhost:3000`

## Deploying to Happyface

1. **Build and tag the image** with your Happyface registry:
   ```bash
   docker build -t [your-happyface-registry]/my-website:latest .
   ```

2. **Push to Happyface registry**:
   ```bash
   docker push [your-happyface-registry]/my-website:latest
   ```

3. **Deploy using your Happyface deployment tool/CLI**:
   - Update your deployment configuration to reference the new image
   - Deploy the updated configuration

## Image Details

- **Base Image**: `nginx:alpine` (production-ready, lightweight)
- **Build Stage**: `node:20-alpine` (builds the React app)
- **Port**: 80
- **Entry Point**: Nginx server serving static SPA

## Performance Features

- ✅ Multi-stage build (optimized image size ~50MB)
- ✅ Gzip compression enabled
- ✅ SPA routing handled with try_files directive
- ✅ Cache control headers for assets and HTML
- ✅ Alpine base images (lightweight)

## Environment Configuration

For Happyface deployment, you can set environment variables in your deployment manifest. The current setup is optimized for production serving static content.

If you need runtime environment variables, update the vite.config.js to include them in the build process.
