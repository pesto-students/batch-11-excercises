const http = require('http');

const httpServer = http.createServer((request, response) => {
  response.statusCode = 200;
  response.write('Pesto Bootcamp!\n');
  response.end();
});

export {
  httpServer,
};
