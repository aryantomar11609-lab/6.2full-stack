const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/keys');
const user = require('../models/userModel');

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
