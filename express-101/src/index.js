const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hey, I am server response');
});

app.get('/movie/:name', (req, res) => {
  const movieName = req.params.name;
  res.send(`My favorite movie is ${movieName}`);
});

app.listen(port, () => {
  console.log(`I am listening on Port ${port}`);
});

module.exports = app;
