const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth');
const swaggerUi = require('swagger-ui-express');
const isProd = process.argv[1].split('/')[1] === 'var';
if(!isProd){
    require('dotenv').config();
}
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
            'user': 'password'
        },
        challenge: true
    }),
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        explorer: true
    }),
)

app.listen(port, () => console.log(`listening on port: ${port}`));
