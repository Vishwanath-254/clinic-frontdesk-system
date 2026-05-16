const swaggerUi = require('swagger-ui-express');

const swaggerJsdoc = require('swagger-jsdoc');

const options = {

    definition: {

        openapi: '3.0.0',

        info: {

            title: 'Clinic Front Desk Management API',

            version: '1.0.0',

            description: 'Clinic Management Backend APIs'
        },

        servers: [
            {
                url: 'http://localhost:5000'
            }
        ]
    },

    apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec
};