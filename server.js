const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();
const routes = require('./routes');
const setHeaders = require('./util/setHeaders');
const port = process.env.PORT || 8000;
const specs = require('./config/swaggerOpts');

app.use(
    setHeaders,
    express.json(),
    express.urlencoded({extended: false}),
    routes,
)

app.use(
    "/api-docs",
    basicAuth({
        users: {
            [process.env.SWAGGER_USERNAME]: process.env.SWAGGER_PASSWORD
        },
        challenge: true
    }),
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        explorer: true
    }),
)

app.listen(port, () => console.log(`listening on port: ${port}`));