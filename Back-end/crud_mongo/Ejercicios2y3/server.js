
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', urlencodedParser, (req, res) => {
  console.log('Database Name:', req.body.db_name, 'Collection Name:', req.body.collection_name, 'First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);

  const mydb = req.body.db_name;
  const coleccion = req.body.collection_name;


  const myobj = { "nombre": req.body.first_name, "apellidos": req.body.last_name, "email": req.body.email };

  //Creacion de una BD 
  MongoClient.connect(url + mydb, function (err, db) {
    if (err) throw err;
    console.log("Base de datos creada");
    db.close();
  });

  //Creacion de una coleccion dentro de una BD
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.createCollection(coleccion, function (err, res) {
      if (err) throw err;
      console.log("Colección creada");
      db.close();
    });
  });

  //Insertar dentro de una coleccion de una BD
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);

    dbo.collection(coleccion).insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("Documento insertado");
      db.close();
    });
  });
});

const mydb = "Guayu";
const coleccion = "jijiji";

app.post('/create', urlencodedParser, (req, res) => {
  console.log("Elemento insertado: \n", 'First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);
  const myobj = { "nombre": req.body.first_name, "apellidos": req.body.last_name, "email": req.body.email };
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);

    dbo.collection(coleccion).insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log("Documento insertado");
      db.close();
    });
  });
  res.redirect('http://127.0.0.1:3000')
  res.end();
});

app.post('/read', urlencodedParser, (req, res) => {
  console.log("Elemento buscado: \n", 'First Name:', req.body.first_name, '\nLast Name: ', req.body.last_name, '\nEmail: ', req.body.email);
  var value = req.body.select;
  var query = {};
  var input = req.body.input;
  switch (value) {
    case "name": query = { "nombre": input }
      break;
    case "surname": query = { "apellidos": input }
      break;
    case "email": query = { "email": input }
      break;
  }
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(coleccion).find(query).toArray(function (err, result) {
      if (err) throw err;
      res.send(result)

      console.log(result);
      db.close();
    });
  });
});

app.post('/update', urlencodedParser, (req, res) => {
  console.log("Elemento buscado: ", '\nEmail: ', req.body.email);
  var query = { "email": req.body.email };

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    var newvalues = { $set: { "nombre": req.body.first_name, "apellidos": req.body.last_name, "email": req.body.email2 } };
    dbo.collection(coleccion).updateOne(query, newvalues, function (err, res) {
      if (err) throw err;
      console.log("Documento actualizado");
      db.close();
    });
  });
});

app.post('/delete', urlencodedParser, (req, res) => {
  console.log("Elemento buscado: ", '\nEmail: ', req.body.email);
  var query = { "email": req.body.email };
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(mydb);
    dbo.collection(coleccion).deleteOne(query, function (err, obj) {
      if (err) throw err;
      console.log("Documento borrado");
      db.close();
    });
  });
});



app.listen(3000);
