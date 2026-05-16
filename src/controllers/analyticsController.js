const Patient = require('../models/Patient');

const Doctor = require('../models/Doctor');

const Appointment = require('../models/Appointment');

const Billing = require('../models/Billing');

// Dashboard statistics
exports.getDashboardStats = async (req, res) => {

    try {

        // Count patients
        const totalPatients = await Patient.count();

        // Count doctors
        const totalDoctors = await Doctor.count();

        // Count appointments
        const totalAppointments = await Appointment.count();

        // Fetch billing records
        const bills = await Billing.findAll();

        // Calculate total revenue
        let totalRevenue = 0;

        bills.forEach((bill) => {

            totalRevenue += bill.amount;
        });

        // Send response
        res.json({

            totalPatients,

            totalDoctors,

            totalAppointments,

            totalRevenue
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};