FROM node:17.4

WORKDIR /api
COPY . /api/
RUN npm ci


EXPOSE 3000
CMD ["npm", "start"]
