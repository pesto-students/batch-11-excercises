const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => res.redirect('/get-form'));

app.get('/get-form', (req, res) => res.render('form-with-get'));
app.get('/submit-form-with-get', (req, res) => res.send(req.query));

app.get('/post-form', (req, res) => res.render('form-with-post'));
app.post('/submit-form-with-post', (req, res) => res.send(req.body));

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
