const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const morgan = require('morgan');

// Swagger
const { swaggerUi, swaggerSpec } = require('./swagger');

// Route imports
const authRoutes = require('./routes/authRoutes');

const patientRoutes = require('./routes/patientRoutes');

const doctorRoutes = require('./routes/doctorRoutes');

const appointmentRoutes = require('./routes/appointmentRoutes');

const billingRoutes = require('./routes/billingRoutes');

const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();

// Middlewares
app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan('dev'));

// Default route
app.get('/', (req, res) => {

    res.send('Clinic Backend Running');
});

// API Routes
app.use('/api/auth', authRoutes);

app.use('/api/patients', patientRoutes);

app.use('/api/doctors', doctorRoutes);

app.use('/api/appointments', appointmentRoutes);

app.use('/api/billing', billingRoutes);

app.use('/api/analytics', analyticsRoutes);

// Swagger Docs
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

module.exports = app;