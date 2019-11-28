const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.header('middleware-header', req.originalUrl);
  console.log('Time:', Date.now(), 'middleware-header', req.originalUrl);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/languages', (req, res) => {
  const languages = {};
  languages.favourite5 = ['JavaScript', 'C', 'C++', 'Java', 'Python'];
  res.send(languages);
});

app.listen(3000, () => console.log('Server listening on port 3000'));
