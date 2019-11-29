const express = require('express');
const mongo = require('mongodb');
const { getDb } = require('./database');

const ObjectId = mongo.ObjectID;
const router = express.Router();
let db;
const connectDB = async () => {
  db = await getDb();
};
connectDB();

const projects = 'projects';
router.get('/', (req, res) => {
  const cursor = db.collection(projects).find({});
  cursor.toArray((err, result) => {
    res.send(result);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.collection(projects).findOne({ _id: new ObjectId(id) }).then((result) => {
    res.send(result);
  });
});

router.post('/', (req, res) => {
  const { project, developer } = req.body;
  db.collection(projects).insertOne({ project, developer }).then((result) => {
    res.send(result);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.collection(projects).deleteOne({ _id: new ObjectId(id) }).then((result) => {
    res.send(result);
  });
});

module.exports = router;
