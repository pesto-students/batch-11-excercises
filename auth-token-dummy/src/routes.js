const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');
const config = require('./config/config');


router.post('/signup', (req, res) => {
  const {
    username,
    password,
  } = req.body;

  jwt.sign({
    username,
  }, config.jwtSecret, {
    expiresIn: 360000,
  },
  (err, token) => {
    if (err) {
      throw err;
    }
    res.json({
      token,
    });
  });
});

router.get('/', (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({
      message: 'No token, authorization denied',
    });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Token is not valid',
    });
  }
});

module.exports = router;
