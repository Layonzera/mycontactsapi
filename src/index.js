const express = require('express'); // import express

const routes = require('./routes');

const app = express(); // initializing express
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000')); // listening server
