
    const express = require("express");
    const app = express();

    let respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Get en /'
    };
    app.get('/', function (req, res) {
        res.send(respuesta);
    });
    app.get('/endpointget', function (req, res) {
        respuesta.mensaje= 'Get en su endpoint';
        res.send(respuesta);
    });
    app.post('/endpointpost', function (req, res) {
        respuesta.mensaje= 'Post en su endpoint';
        res.send(respuesta);
    });
    app.put('/endpointput', function (req, res) {
        respuesta.mensaje= 'Put en su endpoint';
        res.send(respuesta);
    });
    app.delete('/endpointdelete', function (req, res) {
        respuesta.mensaje= 'Delete en su endpoint';
        res.send(respuesta);
    });
    app.listen(3000, () => {
        console.log("El servidor está escuchando en el puerto 3000");
    });
