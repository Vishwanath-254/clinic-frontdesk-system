const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        unique: true
    },

    password: {
        type: DataTypes.STRING
    },

    role: {
        type: DataTypes.ENUM(
            'admin',
            'doctor',
            'receptionist'
        ),
        defaultValue: 'receptionist'
    }
});

module.exports = User;