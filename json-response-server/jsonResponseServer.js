
const http = require('http');

const jsonResponseServer = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: 'Pesto Bootcamp!' }));
  }
});
export {
  jsonResponseServer,
};
