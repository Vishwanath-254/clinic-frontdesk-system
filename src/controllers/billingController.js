const Billing = require('../models/Billing');

// Create bill
exports.createBill = async (req, res) => {

    try {

        const bill = await Billing.create(req.body);

        res.status(201).json({
            message: 'Bill generated successfully',
            bill
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

// Get all bills
exports.getBills = async (req, res) => {

    try {

        const bills = await Billing.findAll();

        res.json(bills);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};