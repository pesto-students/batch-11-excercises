const express = require('express');

const router = express.Router();

const languages = [];
router.get('/', (req, res) => res.render('index', { languages }));

router.get('/new', (req, res) => res.render('new'));

router.post('/', (req, res) => {
  const { name } = req.body;
  languages.push({ name, id: languages.length });
  res.render('index', { languages });
});

router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  let language = {};
  for (const lang of languages) {
    if (lang.id === parseInt(id, 10)) {
      language = lang;
      break;
    }
  }
  res.render('edit', { language });
});

module.exports = router;
