const express = require('express');
const app = express();
const routes = require('./routes');
const setHeaders = require('./util/setHeaders');
const port = process.env.PORT || 8000;

app.use(
    setHeaders,
    express.json(),
    express.urlencoded({extended: false}),
    routes
)

app.listen(port, () => console.log(`listening on port: ${port}`));