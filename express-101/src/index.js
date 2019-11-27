const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => res.send('Hey, I am server response'));

app.get('/movie/title/:titleText', (req, res) => {
  const reqId = req.params.titleText;
  res.send(`My favorite movie is ${reqId}`);
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));


module.exports = app;
