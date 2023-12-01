const db = require('../../DB/mysql');

const TABLApacientes = 'pacientes';

function agregarPaciente(paciente) {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO ${TABLApacientes} SET ?`, paciente, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}