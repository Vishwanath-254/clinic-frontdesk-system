const express = require('express');

const router = express.Router();

const doctorController = require('../controllers/doctorController');

const authMiddleware = require('../middleware/authMiddleware');

// Add doctor
router.post(
    '/',
    authMiddleware,
    doctorController.createDoctor
);

// Get doctors
router.get(
    '/',
    authMiddleware,
    doctorController.getDoctors
);

module.exports = router;