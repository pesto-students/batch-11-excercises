const express = require('express');

const router = express.Router();
const app = express();
const port = 3000;

app.use('/', router);

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  const path = req.path.substring(1, req.path.length);
  console.log('Path : ', req.path.substring(1, req.path.length));

  res.setHeader('middleware-header', path);
  next();
});

router.get('/', (req, res) => res.send('Hello'));

router.get('/languages', (req, res) => {
  const languages = [{ name: 'JavaScript' },
    { name: 'Java' },
    { name: 'Python' },
    { name: 'Haskell' },
    { name: 'C++' },
  ];
  res.setHeader('Content-Type', 'text/json');
  res.send(JSON.stringify(languages));
});

router.get('/packages', (req, res) => {
  const packages = [{ name: 'React' },
    { name: 'Jest' },
    { name: 'Create-react-app' },
    { name: 'express' },
    { name: 'Mongoose' },
  ];
  res.setHeader('Content-Type', 'text/json');
  res.send(JSON.stringify(packages));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
