const express = require('express');

/**
 * Applies the API endpoints
 * @param {express.Application} app 
 */
module.exports = (app) => {
  const router = express.Router();


  router.get('/healthcheck', (req, res) => {
    res.send('OKAY');
  });

  app.use('/api', router);
}