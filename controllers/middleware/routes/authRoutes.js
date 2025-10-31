const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getBalance, deposit, withdraw } = require('../controllers/bankController');

router.get('/balance', authMiddleware, getBalance);
router.post('/deposit', authMiddleware, deposit);
router.post('/withdraw', authMiddleware, withdraw);

module.exports = router;
