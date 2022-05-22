const serverless = require('serverless-http');
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../docs/openapi.json');

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports.openapi = serverless(app);
