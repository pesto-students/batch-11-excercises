const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.redirect('/form-with-get'));

app.get('/form-with-get', (req, res) => res.render('form-with-get'));

app.get('/form-with-post', (req, res) => res.render('form-with-post'));

app.get('/submit-form-with-get', (req, res) => res.send(JSON.stringify(req.query)));

app.post('/submit-form-with-post', (req, res) => res.send(JSON.stringify(req.body)));

app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
