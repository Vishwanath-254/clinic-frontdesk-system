const express = require('express');

const router = express.Router();

const appointmentController = require('../controllers/appointmentController');

const authMiddleware = require('../middleware/authMiddleware');

// Create appointment
router.post(
    '/',
    authMiddleware,
    appointmentController.createAppointment
);

// Get appointments
router.get(
    '/',
    authMiddleware,
    appointmentController.getAppointments
);

module.exports = router;