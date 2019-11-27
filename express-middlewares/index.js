const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/languages", (req, res) => {
  const favLanguages = {
    language1: "Javascript",
    language2: "Python",
    language3: "Java",
    language4: "C++",
    language5: "C"
  };

  res.set("middleware-header", req.route.path);
  console.log(res);
  res.send(favLanguages);
});

app.get("/packages", (req, res) => {
  const favLanguages = {
    package1: "nodemon",
    package2: "lodash",
    package3: "create-react-app",
    package4: "express",
    package5: "body-parser"
  };

  res.set("middleware-header", req.route.path);

  console.log(res);

  res.send(favLanguages);
});

app.listen(3000);

module.exports = app;
