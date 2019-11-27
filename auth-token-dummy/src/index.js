const express = require('express');

const router = require('./routes');

const app = express();

const port = 8000;


app.use(express.json({ extended: false }));
app.use('/', router);
app.post('/signup', router);


app.listen(port, () => console.log(`Server listening on port: ${port}`))


module.exports = app;

