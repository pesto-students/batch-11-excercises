/* eslint-disable no-console */
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("middleware-header", `${req.route}`);
  console.log("Time", Date.now());
  console.log("middleware-header", `${req.route}`);
  next();
});
app.get("/", (req, res) => {
  res.send("Hello");
});
const languages = {
  1: "JavaScript",
  2: "C++",
  3: "Java"
};
app.get("/languages", (req, res) => {
  res.send(JSON.stringify(languages));
});

app.get("/packages", (req, res) => {
  const favPackages = {
    chalk: "2.5",
    express: "2.89",
    mongoose: "10.2",
    redux: "1.2.3",
    router: "5.8.7"
  };

  res.send(JSON.stringify(favPackages));
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
