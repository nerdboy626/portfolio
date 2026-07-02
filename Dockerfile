# ---------- Builder Stage ----------
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# ---------- Runtime Stage ----------
FROM node:24-alpine AS runner

LABEL maintainer="Nicolas Caminero"
LABEL description="Developer portfolio built with Next.js"
LABEL version="1.0"

WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

# Copy the standalone server
COPY --from=builder /app/.next/standalone ./

# Copy static assets
COPY --from=builder /app/.next/static ./.next/static

# Copy public assets
COPY --from=builder /app/public ./public

# Create a non-root user and group
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Give the application files to that user
RUN chown -R nextjs:nextjs /app

# Run the application as the non-root user
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]