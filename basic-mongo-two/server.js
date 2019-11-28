const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey there!");
});

app.get("/projects", (req, res) => {
  res.send("Projects");
});

app.get("/projects/:id", (req, res) => {
  res.send(req.params.id);
});

app.post("/projects", (req, res) => {
  res.send(req.body);
});

app.put("/projects/:id", (req, res) => {
  res.send(req.body.id);
});

app.delete("/projects/:id", (req, res) => {
  res.send(req.body.id);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
