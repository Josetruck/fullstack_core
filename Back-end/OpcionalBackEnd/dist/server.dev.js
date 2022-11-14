"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var mongo = require('mongodb');

var MongoClient = mongo.MongoClient;
var url = "mongodb://127.0.0.1:27017/";
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
var mydb = "Libreria";
var autores = "Autores";
var libros = "Libros";
app.post('/', urlencodedParser, function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(libros).find({}).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
});
app.post('/read', urlencodedParser, function (req, res) {
  var query = {
    "titulo": req.body.titulo
  };
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(libros).find(query).toArray(function _callee(err, result) {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!err) {
                _context.next = 2;
                break;
              }

              throw err;

            case 2:
              _context.next = 4;
              return regeneratorRuntime.awrap(dbo.collection(autores).find({
                "id_autor": result[0].id_autor
              }).toArray(function (err, result2) {
                if (err) throw err;
                var busqueda = [result, result2];
                res.send(busqueda);
                db.close();
              }));

            case 4:
              ;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    });
  });
});
app.post('/create', urlencodedParser, function _callee4(req, res) {
  var titulo, isbn, npag, id_autor, nombre_autor, apellidos_autor, nacimiento, tipo;
  return regeneratorRuntime.async(function _callee4$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          titulo = req.body.titulo;
          isbn = req.body.isbn;
          npag = req.body.npag;
          id_autor = parseInt(req.body.id_autor);
          nombre_autor = req.body.nombre_autor;
          apellidos_autor = req.body.apellidos_autor;
          nacimiento = req.body.nacimiento;
          tipo = req.body.tipo;
          MongoClient.connect(url, function _callee3(err, db) {
            var dbo;
            return regeneratorRuntime.async(function _callee3$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!err) {
                      _context4.next = 2;
                      break;
                    }

                    throw err;

                  case 2:
                    dbo = db.db(mydb);
                    _context4.next = 5;
                    return regeneratorRuntime.awrap(dbo.collection(autores).find({
                      "id_autor": id_autor
                    }).toArray(function _callee2(err, result) {
                      var checkAndInsert;
                      return regeneratorRuntime.async(function _callee2$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              checkAndInsert = function _ref(dbo, result) {
                                return regeneratorRuntime.async(function checkAndInsert$(_context2) {
                                  while (1) {
                                    switch (_context2.prev = _context2.next) {
                                      case 0:
                                        if (!(result.length == 0)) {
                                          _context2.next = 5;
                                          break;
                                        }

                                        _context2.next = 3;
                                        return regeneratorRuntime.awrap(dbo.collection(autores).insertOne(myobjautor, function (err, res) {
                                          if (err) throw err;
                                          console.log("Documento Autor creado");
                                          dbo.collection(libros).insertOne(myobj, function (err, res) {
                                            if (err) throw err;
                                            console.log("libro insertado");
                                          });
                                          console.log("Se ha insertado un libro y un autor");
                                        }));

                                      case 3:
                                        _context2.next = 8;
                                        break;

                                      case 5:
                                        console.log("Intenta el else");
                                        _context2.next = 8;
                                        return regeneratorRuntime.awrap(dbo.collection(libros).insertOne(myobj, function (err, res) {
                                          if (err) throw err;
                                          console.log("Documento Solo Libro creado");
                                        }));

                                      case 8:
                                      case "end":
                                        return _context2.stop();
                                    }
                                  }
                                });
                              };

                              if (!err) {
                                _context3.next = 3;
                                break;
                              }

                              throw err;

                            case 3:
                              console.log("resultado: ", result);
                              myobj = {
                                "titulo": titulo,
                                "ISBN": isbn,
                                "tipo": tipo,
                                "npag": npag,
                                "id_autor": id_autor
                              };
                              myobjautor = {
                                "id_autor": id_autor,
                                "nombre": nombre_autor,
                                "apellidos": apellidos_autor,
                                "año de nacimiento": nacimiento,
                                "tipo": tipo
                              };
                              _context3.next = 8;
                              return regeneratorRuntime.awrap(checkAndInsert(dbo, result));

                            case 8:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      });
                    }));

                  case 5:
                    db.close;

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            });
          });

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  });
});
app.listen(3000);