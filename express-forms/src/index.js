const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  return res.redirect('/form-with-get');
});

app.get('/form-with-get', (req, res) => {
  return res.render('form-with-get');
});

app.get('/form-with-post', (req, res) => {
  return res.render('form-with-post');
});

app.get('/submit-form-with-get', (req, res) => {
  return res.send({'firstname: ' : req.query.first,'lastname: ': req.query.last});
});

app.post('/submit-form-with-post', (req, res) => {
  return res.send(req.body);
});

app.get('/submit-form-with-post', (req, res) => {
  return res.send({'firstname: ' : req.body.first,'lastname: ': req.body.last});
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
