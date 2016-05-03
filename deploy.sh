#!/bin/bash

rm -rf node_modules
npm cache clear
npm install
npm run build
pm2 startOrRestart pm2.production.json
