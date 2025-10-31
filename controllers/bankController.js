let user = require('../models/userModel');

exports.getBalance = (req, res) => {
  res.status(200).json({ balance: user.balance });
};

exports.deposit = (req, res) => {
  const { amount } = req.body;
  if (!amount || amount <= 0) {
    return res.status(400).json({ message: 'Invalid deposit amount' });
  }
  user.balance += amount;
  res.status(200).json({ message: `Deposited ${amount} successfully`, balance: user.balance });
};

exports.withdraw = (req, res) => {
  const { amount } = req.body;
  if (!amount || amount <= 0) {
    return res.status(400).json({ message: 'Invalid withdrawal amount' });
  }
  if (amount > user.balance) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }
  user.balance -= amount;
  res.status(200).json({ message: `Withdrew ${amount} successfully`, balance: user.balance });
};
