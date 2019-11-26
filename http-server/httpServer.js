const http = require('http');

const httpServer = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-type': 'text/html' });
  response.write('Pesto Bootcamp!\n');
  response.end();
});

export {
  httpServer,
};
