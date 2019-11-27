const express = require('express');

const app = express();
const port = process.env.port || 4000;

const logMiddlewareHeader = (req, res, next) => {
  res.setHeader('middleware-header', `${req.url}`);
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  console.log('Request made on', `${date} ${time}`);
  console.log('middleware-header', `${req.url}`);
  next();
};

app.use(logMiddlewareHeader);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/languages', (req, res) => {
  const languages = ['C++', 'JAVA', 'JavaScript', 'Python', 'C'];
  res.send({ languages });
});

app.get('/packages', (req, res) => {
  const packages = ['react', 'particlejs', 'express', 'nodemon'];
  res.send({ packages });
});

app.listen(port);
