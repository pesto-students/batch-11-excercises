const express = require('express');
const http = require('http');
const movieRouter = require('./routes/movieRouter');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use('/movie', movieRouter);

app.use((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end('Hey, I am server response');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server is started at ${hostname} on port ${port}`);
});

module.exports = app;
