const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "SimplePractice Express API for Iterable",
            version: "0.1.0",
            description:
                "This is a proxy API built to interact with the Iterable API",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Sean Mee",
                url: "https://www.simplepractice.com",
                email: "sean@simplepractice.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8000",
            },
        ],
    },
    apis: ["./routes/api/newTrialSubmit.js"],
};

module.exports = swaggerJsdoc(options)