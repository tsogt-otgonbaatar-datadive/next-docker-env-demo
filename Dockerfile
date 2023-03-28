FROM node:16-alpine

COPY . .

RUN npm ci && npm run build

ENTRYPOINT [ "npm", "run", "start" ]