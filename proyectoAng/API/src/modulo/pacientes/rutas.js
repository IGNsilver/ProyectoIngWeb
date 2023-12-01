const express = require('express');

const router = express.Router();

const respuestas = require('../../red/respuestas');
const controladorDB = require('./controladorDB');

router.get('/', (req, res) => {
    res.send('Pacientes conectados');
});

module.exports = router;