const express = require('express');

const router = express.Router();

const billingController = require('../controllers/billingController');

const authMiddleware = require('../middleware/authMiddleware');

// Create bill
router.post(
    '/',
    authMiddleware,
    billingController.createBill
);

// Get all bills
router.get(
    '/',
    authMiddleware,
    billingController.getBills
);

module.exports = router;