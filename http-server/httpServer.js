const http = require('http');

const httpServer = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write('Pesto Bootcamp!\n');
  response.end();
});

export {
  httpServer,
};
