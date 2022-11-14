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
const mydb = "Libreria";
const autores = "Autores";
const libros = "Libros"
app.post('/', urlencodedParser, (req, res) => {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(libros).find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
            db.close();
        });
    });
});
app.post('/read', urlencodedParser, (req, res) => {
    var query = { "titulo": req.body.titulo };
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        dbo.collection(libros).find(query).toArray(async (err, result) => {
            if (err) throw err;
            await dbo.collection(autores).find({ "id_autor": result[0].id_autor }).toArray(function (err, result2) {
                if (err) throw err;
                var busqueda = [result, result2]
                res.send(busqueda);
                db.close();
            });
            ;
        })
    });
});
app.post('/create', urlencodedParser, async (req, res) => {
    var titulo = req.body.titulo;
    var isbn = req.body.isbn;
    var npag = req.body.npag;
    var id_autor = parseInt(req.body.id_autor);
    var nombre_autor = req.body.nombre_autor;
    var apellidos_autor = req.body.apellidos_autor;
    var nacimiento = req.body.nacimiento;
    var tipo = req.body.tipo;
    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        await dbo.collection(autores).find({ "id_autor": id_autor }).toArray(async function (err, result) {
            if (err) throw err;
            console.log("resultado: ", result)
            myobj = { "titulo": titulo, "ISBN": isbn, "tipo": tipo, "npag": npag, "id_autor": id_autor }
            myobjautor = { "id_autor": id_autor, "nombre": nombre_autor, "apellidos": apellidos_autor, "año de nacimiento": nacimiento, "tipo": tipo }
            async function checkAndInsert(dbo, result) {
                if (result.length == 0) {
                    await dbo.collection(autores).insertOne(myobjautor, function (err, res) {
                        if (err) throw err;
                        console.log("Documento Autor creado");
                        dbo.collection(libros).insertOne(myobj, function (err, res) {
                            if (err) throw err;
                            console.log("libro insertado")
                        });
                        
                        console.log("Se ha insertado un libro y un autor")
                    })
                } else {
                    console.log("Intenta el else")
                    await dbo.collection(libros).insertOne(myobj, function (err, res) {
                        if (err) throw err;
                        console.log("Documento Solo Libro creado");
                    })
                    
                }
            }
            await checkAndInsert(dbo, result);
        })
        db.close
    });
});




app.listen(3000)