const mysql = require('mysql');
const config = require('../config');
const { set } = require('../app');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let conexion;

function conMySql (){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if (err) {
            console.log('Error de conexión', err);
            setTimeout(conMySql, 2000);
        } else {
            console.log('Conexión exitosa');
        }
    });

    conexion.on('error', (err) => {
        console.log('Error de conexión', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conMySql();
        } else {
            throw err;
        }
    })
}

conMySql();

function agregarPaciente(tablapacientes,infoPaciente) {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO ${tablapacientes} SET ?`, infoPaciente, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

function obtenerPacientes(tablapacientes) { 
    return 'Todos'
}

function actualizarPaciente(rut, tablapacientes) { }

function eliminarPaciente(rut) { }

module.exports = { 
    agregarPaciente, 
    obtenerPacientes, 
    actualizarPaciente, 
    eliminarPaciente 
};