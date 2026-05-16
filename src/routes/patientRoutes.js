const express = require('express');

const router = express.Router();

const patientController = require('../controllers/patientController');

const authMiddleware = require('../middleware/authMiddleware');

// Create patient
router.post(
    '/',
    authMiddleware,
    patientController.createPatient
);

// Get patients
router.get(
    '/',
    authMiddleware,
    patientController.getPatients
);

module.exports = router;