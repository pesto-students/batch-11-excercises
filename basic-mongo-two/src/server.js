const express = require('express');
const router = require('./projectRouter');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/projects', router);

app.listen(port, () => console.log(`Server started on port ${port}`));
