const Appointment = require('../models/Appointment');

const Patient = require('../models/Patient');

const Doctor = require('../models/Doctor');

// Create appointment
exports.createAppointment = async (req, res) => {

    try {

        const appointment = await Appointment.create(req.body);

        res.status(201).json({
            message: 'Appointment scheduled successfully',
            appointment
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

// Get appointments
exports.getAppointments = async (req, res) => {

    try {

        const appointments = await Appointment.findAll({
            include: [Patient, Doctor]
        });

        res.json(appointments);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};