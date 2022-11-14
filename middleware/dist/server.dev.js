"use strict";

var express = require('express');

var app = express();
var port = 3000;
app.use(express.json());
app.use(express.urlencoded()); // Middleware que verifica si el usuario es un administrador.

function isAdmin(req, res, next) {
  if (req.body["isAdmin"]) {
    next();
  } else {
    res.status(403).send("Sorry but you are not an admin and you do not have access to route ".concat(req.url));
  }

  console.log("Este es el que sale: " + JSON.stringify(req.body["isAdmin"]));
} // Se agrega el middleware en la aplicación.


app.use(isAdmin); // Endpoint al cual solo deben ingresar usuarios administradores.

app.get('/dashboard', function (req, res) {
  console.log(req.body);
  res.send('You are an admin');
});
app.use(express.json());
app.listen(port, function () {
  console.log("Server listeting on port ".concat(port));
});