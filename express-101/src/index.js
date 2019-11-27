const express = require("express");

const app = express();
const PORT = 3000;

// 1) Create Routes
app.get("/", (req, res) => {
  res.send(`Hey, I am server response`);
});

app.get("/movie/:movieName", (req, res) => {
  res.send(`My favorite movie is ${req.params.movieName}`);
});

// 2) Start server on port 3000
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

module.exports = app;
