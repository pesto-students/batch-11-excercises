const http = require('http');

const httpServer = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('Pesto Bootcamp!\n');
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(`Error 404: ${req.method} not supported`);
  }
});

export {
  httpServer,
};
