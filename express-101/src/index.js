const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hey, I am server response'));
app.get('/movie/:title', (req, res) => {
  const { title } = req.params;
  res.send(`My favorite movie is ${title}`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app;
