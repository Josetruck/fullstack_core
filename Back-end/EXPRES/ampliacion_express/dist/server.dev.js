"use strict";

var express = require('express');

var app = express();
var PORT = 3000;
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use('/public', express["static"]('public/otro'));
app.use('/public2', express["static"]('public'));
app.listen(PORT, function () {
  return console.log("Server listening on port: ".concat(PORT));
});