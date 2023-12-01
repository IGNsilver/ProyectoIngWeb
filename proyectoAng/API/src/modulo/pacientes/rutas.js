const express = require('express');

const router = express.Router();

const respuestas = require('../../red/respuestas');
const controladorDB = require('./controladorDB');

router.get('/', (req, res) => {
    const respuesta = controladorDB.obtenerTablasPacientes()
    .then((respuesta) => {
        respuestas.success(req, res, respuesta, 200);
    });
    res.send('Pacientes conectados');
});

module.exports = router;