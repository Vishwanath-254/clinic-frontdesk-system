const Doctor = require('../models/Doctor');

// Add doctor
exports.createDoctor = async (req, res) => {

    try {

        const doctor = await Doctor.create(req.body);

        res.status(201).json({
            message: 'Doctor added successfully',
            doctor
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

// Get all doctors
exports.getDoctors = async (req, res) => {

    try {

        const doctors = await Doctor.findAll();

        res.json(doctors);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};