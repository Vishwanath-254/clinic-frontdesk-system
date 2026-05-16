const Patient = require('../models/Patient');

// Create patient
exports.createPatient = async (req, res) => {

    try {

        const patient = await Patient.create(req.body);

        res.status(201).json({
            message: 'Patient added successfully',
            patient
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

// Get all patients
exports.getPatients = async (req, res) => {

    try {

        const patients = await Patient.findAll();

        res.json(patients);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};