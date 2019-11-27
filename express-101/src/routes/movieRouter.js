const express = require('express');

const movieRouter = express.Router();

movieRouter.route('/:title')
  .get((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`My favorite movie is ${req.params.title}`);
  });

module.exports = movieRouter;
