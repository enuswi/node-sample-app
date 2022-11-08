## ファイル提供 ################################################
FROM node:18-alpine3.15 as provider

WORKDIR /app

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini

COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

## ビルド ################################################
FROM node:18-alpine3.15 as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY src tsconfig.json ./
RUN yarn build

## 実行環境 ################################################
FROM gcr.io/distroless/nodejs:18-debug
ENV NODE_ENV production

WORKDIR /app

COPY --from=provider --chown=nonroot:nonroot /tini /tini
COPY --from=provider --chown=nonroot:nonroot /app/node_modules ./node_modules
COPY --from=builder --chown=nonroot:nonroot /app/out ./out

USER nonroot
EXPOSE 3000

ENTRYPOINT ["/tini", "--", "/nodejs/bin/node"]
CMD ["/app/out/index.js"]
