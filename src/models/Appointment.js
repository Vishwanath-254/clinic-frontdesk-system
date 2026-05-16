const { DataTypes } = require('sequelize');

const sequelize = require('../config/db');

const Appointment = sequelize.define('Appointment', {

    appointmentDate: {
        type: DataTypes.DATE,
        allowNull: false
    },

    status: {
        type: DataTypes.ENUM(
            'scheduled',
            'completed',
            'cancelled'
        ),
        defaultValue: 'scheduled'
    }
});

module.exports = Appointment;