const express = require('express');
const configureApi = require('./api');
const path = require('path');

const app = express();

configureApi(app);

app.use(express.static(path.resolve('./public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

/** @type {express.Application} */
module.exports = app;