const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const projects = "projects";
const PORT = 5000;
const MONGO_URL = "mongodb://localhost:27017/pesto-day-19";
const DB_NAME = "pesto-day-19";

let db;

MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) {
    throw new Error(err);
  }
  db = client.db(DB_NAME);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hey there!");
});

app.get("/projects", async (req, res) => {
  db.collection(projects)
    .find()
    .toArray((err, result) => {
      res.send(result);
    });
});

app.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  db.collection(projects)
    .find({ project: id })
    .toArray((err, result) => {
      res.send(result);
    });
});

app.post("/projects", (req, res) => {
  const { name, project } = req.body;
  db.collection(projects).insertOne({ developer: name, project });
  res.send("Inserted");
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  db.collection(projects).update(
    { project: id },
    { $set: { project: "Building" } },
    err => {
      if (err) throw err;
      res.send("Updated");
    }
  );
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  db.collection(projects).remove({ project: id }, err => {
    if (err) throw err;
    res.send("Removed");
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
