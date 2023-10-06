import express from 'express';
import { createServer } from 'http';
import path from 'path';
import fetch from 'node-fetch';

async function herokuConnect(PORT) {
  // Deploy the Express server to Heroku
  const heroku = require('heroku-cli-js');
  const herokuApp = new heroku.App();
  await herokuApp.create();
  await herokuApp.deploy(path.join(__dirname, 'app.js'));

  // Start the Express server on Heroku
  const server = global.server = createServer(global.app);
  server.listen(PORT, () => {
    console.log('App listened on port', PORT);
    if (opts['keepalive']) keepAlive();
  });
}

function keepAlive() {
  // Update the keepAlive() function to use the Heroku URL instead of the Replit URL
  const url = `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`;
  if (/(\/\/|\.)undefined\./.test(url)) return;
  setInterval(() => {
    fetch(url).catch(console.error);
  }, 5 * 1000 * 60); // Send a request every 5 minutes
}

export default herokuConnect;
