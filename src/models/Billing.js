const { DataTypes } = require('sequelize');

const sequelize = require('../config/db');

const Billing = sequelize.define('Billing', {

    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    paymentStatus: {
        type: DataTypes.ENUM(
            'paid',
            'pending'
        ),
        defaultValue: 'pending'
    }
});

module.exports = Billing;