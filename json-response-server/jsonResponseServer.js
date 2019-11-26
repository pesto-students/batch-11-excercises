const http = require('http');

const jsonResponseServer = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-type': 'application/json' });
  const responseBody = { data: 'Pesto Bootcamp!' };
  response.write(JSON.stringify(responseBody));
  response.end();
});

export {
  jsonResponseServer,
};
