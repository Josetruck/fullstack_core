const pug = require('pug');
const express  = require('express');
const app = express();

// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', '.');

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

app.get('/', (req, res) => {
res.render('view.pug'); // Se muestra la plantilla view.pug
});

app.listen(3000);