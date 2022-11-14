"use strict";

var express = require("express");

var jwt = require("jsonwebtoken");

var app = express();
app.get("/api", function (req, res) {
  res.json({
    mensaje: "Nodejs and JWT"
  });
});
app.post("/api/login", function (req, res) {
  var user = {
    id: 1,
    nombre: "Davinia",
    email: "daviniadelarosa@gmail.com"
  };
  jwt.sign({
    user: user
  }, 'secretkey', {
    expiresIn: '1000s'
  }, function (err, token) {
    res.json({
      token: token
    });
  });
});
app.post("/api/posts", verifyToken, function (req, res) {
  jwt.verify(req.token, 'secretkey', function (error, authData) {
    if (error) {
      res.sendStatus(403);
      console.log(error);
    } else {
      res.json({
        mensaje: "Acceso correcto",
        authData: authData
      });
    }
  });
}); // Authorization: Bearer <token>

function verifyToken(req, res, next) {
  var bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    var bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(3000, function () {
  console.log("nodejs app running...");
});