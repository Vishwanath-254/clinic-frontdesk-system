const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    try {

        // Get token from headers
        const token = req.headers.authorization;

        // Check token exists
        if (!token) {

            return res.status(401).json({
                message: 'No token provided'
            });
        }

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Store user data
        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: 'Invalid token'
        });
    }
};