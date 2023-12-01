exports.success = function(req, res, message, status) {
    const statusCode = status || 200;
    const mensajeOK = message || '';

    res.status(statusCode).send({
        error: 'false',
        status: statusCode,
        body: mensajeOK
    });
}

exports.error = function(req, res, message, status) {
    const statusCode = status || 200;
    const mensajeError = message || 'Error interno';

    res.status(status).send({
        error: 'true',
        status: status,
        body: mensajeError
    });
}