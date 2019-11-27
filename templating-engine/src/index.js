const express = require("express");

const app = express();
const PORT = 3000;
const languages = ["JavaScript", "Haskell", "Python"];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index", { languages });
});

app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
});
