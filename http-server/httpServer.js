
const http = require('http');

const httpServer = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Pesto Bootcamp!\n');
  }
});

export {
  httpServer,
};
