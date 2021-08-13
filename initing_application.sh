#!/bin/bash
cd back-end/
docker-compose up -d
cd ..
cd front-end/
docker build -t ps-container:dev .
docker run -it --rm \
-v ${PWD}:/app \
-v /app/node_modules \
-p 3001:3000 \
-e CHOKIDAR_USEPOLLING=true \
ps-container:dev
