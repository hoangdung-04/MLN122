# ==========================================
# Stage 1: Build the Vite application
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package manifests and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build production assets into /dist
COPY . .
RUN npm run build

# ==========================================
# Stage 2: Production runtime server
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Install lightweight, high-performance static server
RUN npm install -g serve

# Copy built production assets
COPY --from=builder /app/dist ./dist

# Render dynamically injects $PORT (default 10000)
ENV PORT=10000
EXPOSE 10000

# Start server bound to 0.0.0.0 on Render's dynamic port
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT:-10000}"]
