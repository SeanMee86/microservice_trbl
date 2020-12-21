const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Swagger Test",
            version: "0.1.0",
            description:
                "Test API",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Sean Mee",
                url: "https://seanmeedevworld.com",
                email: "seanmeedev@gmail.com.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8000",
            },
            {
                url: "http://testnodejsservice-env.eba-muarpitu.us-west-2.elasticbeanstalk.com/"
            }
        ],
    },
    apis: ["./routes/api/newTrialSubmit.js"],
};

module.exports = swaggerJsdoc(options)
