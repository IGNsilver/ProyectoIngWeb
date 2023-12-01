const db = require('../../DB/mysql');

const tablapacientes = 'pacientes';

function obtenerTablasPacientes() {
    return db.obtenerTablasPacientes(tablapacientes);
}

function agregarPaciente(paciente) {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO ${tablapacientes} SET ?`, paciente, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = { 
    obtenerTablasPacientes,
    agregarPaciente
};