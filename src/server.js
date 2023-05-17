'use strict';


const express = require('express');
const cors = require('cors');

const app = express();
const logger = require('./middleware/logger');
const notFound = require('./error-handlers/404');
const errorMessage = require('./error-handlers/500');
const validator = require('./middleware/validator');


// middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// CRUD 
app.get('/', (req, res, next) => {
  res.status(200).send('Server is alive!!');
});

app.get('/person', validator, (req, res, next) => {
  // console.log(req.query);
  res.status(200).send(req.query);
});

app.get('/success', (req, res, next) => {
  res.status(200).send('Blast off!!');
});

app.get('/bad', (req, res, next) => {
  next('Houston, we have an error!');
});

app.use('*', notFound);
app.use(errorMessage);


const start = (port) => app.listen(port, () => console.log('listening on port:', port));

module.exports = { start, app };
