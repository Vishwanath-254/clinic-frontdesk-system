const express = require('express');

const router = express.Router();

const patientController = require('../controllers/patientController');

const authMiddleware = require('../middleware/authMiddleware');

const roleMiddleware = require('../middleware/roleMiddleware');

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

// Admin-only delete route
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('admin'),
    async (req, res) => {

        res.json({
            message: 'Only admin can delete patients'
        });
    }
);

module.exports = router;