const http = require('http');

const jsonResponseServer = http.createServer((request, response) => {
  response.statusCode = 200;
  response.write(JSON.stringify({ data: 'Pesto Bootcamp!' }));
  response.end();
});

export {
  jsonResponseServer,
};
