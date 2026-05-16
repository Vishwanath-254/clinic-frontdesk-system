const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.register = async (req, res) => {

    try {

        const { name, email, password, role } = req.body;

        // Check existing user
        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {

            return res.status(400).json({
                message: 'User already exists'
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({
            message: 'User registered successfully',
            user
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({
            where: { email }
        });

        if (!user) {

            return res.status(404).json({
                message: 'User not found'
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.status(401).json({
                message: 'Invalid password'
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            }
        );

        res.json({
            message: 'Login successful',
            token
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};