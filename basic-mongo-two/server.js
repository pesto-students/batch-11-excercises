const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();

let db;

MongoClient.connect("mongodb://localhost:27017/pesto-day-19", (err, client) => {
  if (err) {
    throw new Error(err);
  }

  db = client.db("pesto-day-19");
});

app.get("/", (req, res) => {
  res.send("Welcome to Mongo Excercise");
});

app.get("/projects", (req, res) => {
  db.collection("projects")
    .find()
    .toArray((err, result) => {
      res.send(result);
    });
});

app.get("/projects/:id", (req, res) => {
  const dbid = req.params.id;

  db.collection("projects")
    .find({ project: dbid })
    .toArray((err, result) => {
      res.send(result);
    });
});

app.post("/projects", (req, res) => {
  const dbid = req.params.id;

  db.collection("projects").insertOne({ developer: "Isaac Z", project: "npm" });

  res.send('Inserted');
});

app.put("/projects/:id", (req, res) => {

  db.collection("projects").update(
    { project : req.params.id},
    { $set: { project : "Building" } },
    (err, result) => {
      if (err) throw err;
      res.send("Document Updated Successfully");
    }
  );
});

app.delete("/projects/:id", (req,res) => {

    db.collection("projects").remove({project:req.params.id},(err, result) => {
        
        if(err) throw err;    
    
        res.send('Document Removed Successfully');
    });
});

app.listen(3000);
