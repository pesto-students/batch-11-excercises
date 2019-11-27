const express = require('express');

const app = express();
const port = 3000;

const headerMiddleWare = (req, res, next) => {
  res.set({
    'middleware-header': req.route.path.slice(1),
  });
  next();
};

app.get('/', headerMiddleWare, (req, res) => {
  res.send('hello');
});

app.get('/languages', headerMiddleWare, (req, res) => {
  res.json([
    'java', 'javascript', 'python', 'c++', 'c',
  ]);
});

app.get('/packages', headerMiddleWare, (req, res) => {
  res.json([
    'moment', 'react', 'lodash', 'eslint', 'node',
  ]);
});

app.listen(port, () => {
  console.log(`Listening on port${port}`);
});
