const express = require('express'); // import express
require('express-async-errors');

const routes = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express(); // initializing express
app.use(express.json());

app.use(cors); // middleware de CORS
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log('Server started at http://localhost:3001')); // listening server
