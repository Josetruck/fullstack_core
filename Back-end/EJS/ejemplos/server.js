var express = require('express');
var app = express();

//Se le indica el motor de plantillas 
app.set('view engine', 'ejs');

// res.render carga la plantilla en / en este caso

// index 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');