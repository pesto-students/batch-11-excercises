const express = require('express');
const { getDb } = require('./database');

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

module.exports = router;
