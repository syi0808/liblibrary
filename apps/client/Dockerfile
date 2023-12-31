FROM node:18-alpine as base

RUN apk add -f --update --no-cache --virtual .gyp nano bash libc6-compat python3 make g++ \
      && yarn global add turbo \
      && apk del .gyp

FROM base AS pruned
WORKDIR /app
ARG APP=client

COPY . .

RUN turbo prune --scope=$APP --docker

FROM base AS installer
WORKDIR /app
ARG APP=client

COPY .yarn ./.yarn
COPY .pnp.cjs .yarnrc.yml /app/
COPY --from=pruned /app/out/json/ .
COPY --from=pruned /app/out/yarn.lock /app/yarn.lock

COPY apps/${APP}/package.json /app/apps/${APP}/package.json

RUN \
      --mount=type=cache,target=/usr/local/share/.cache/yarn/v6,sharing=locked \
      yarn install

COPY --from=pruned /app/out/full/ .
COPY turbo.json turbo.json

RUN turbo run build --no-cache --filter=${APP}^...

RUN \
      --mount=type=cache,target=/usr/local/share/.cache/yarn/v6,sharing=locked \
      yarn install --immutable

FROM base AS runner
WORKDIR /app
ARG APP=client
ARG START_COMMAND=start

COPY --from=installer /app .

CMD yarn workspace ${APP} ${START_COMMAND}