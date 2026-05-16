const Patient = require('./Patient');

const Doctor = require('./Doctor');

const Appointment = require('./Appointment');

// Patient → Appointment
Patient.hasMany(Appointment);

Appointment.belongsTo(Patient);

// Doctor → Appointment
Doctor.hasMany(Appointment);

Appointment.belongsTo(Doctor);

module.exports = {
    Patient,
    Doctor,
    Appointment
};