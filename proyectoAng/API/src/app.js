const express = require('express');
const config = require('./config');

const pacientes = require('./modulo/pacientes/rutas')

const app = express();

//configuraciones
app.set('port', config.app.port)

//rutas
app.use('/api/pacientes', pacientes)

module.exports = app;