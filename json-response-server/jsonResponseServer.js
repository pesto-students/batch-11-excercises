const http = require('http');

const jsonResponseServer = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: 'Pesto Bootcamp!' }));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(`Error 404: ${req.method} not supported`);
  }
});

export {
  jsonResponseServer,
};
