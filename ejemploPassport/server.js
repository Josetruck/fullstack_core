const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
//Estrategia que vamos a usar para autenticarnos
const PassportLocal = require('passport-local').Strategy;
//Sustituto de body-parser
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use(session({
    secret:'secret',
    //En cada inicio de sesión se guarda la sesión aunque no haya sufrido cambios
    resave: true, 
    //La sesion se va a guardar aunque no lleve ninguna información adicional
    saveUninitialized: true
}));
//Inicializamos Passport para poder usarla en el servidor
app.use(passport.initialize());
//Hacemos llegar al servidor la configuración de sesiones de Passport
app.use(passport.session());
//Validamos usando la estrategia local
passport.use(new PassportLocal(function(username, password, done){
    if(username=="admin" && password=="admin"){
        /*done envía el resultado
            param 1: error
            param 2: resultado (cualquier valor que no sea false), representa
            al usuario que inició sesión
            param 3 (opcional): opciones de configuración
        */
        return done(null, {id: 1, name: "Administrador"}, {});
    }
    return done(null, false);
}));

//Dato normalmente numérico para identificar al usuario con la sesion 
//iniciada
passport.serializeUser(function(user, done){
    done(null, user.id);
});

//Traducción del dato serializado a el usuario que le corresponde
passport.deserializeUser(function(id, done){
    //Está hecho para un único usuario a mano, habría que hacerlo generico
    done(null, {id: 1, name: "Administrador"});
})

app.get('/', (req, res) => {
    res.render("hola");
});

app.get('/login', (req, res) => {
    res.render("login")
});

app.post('/login', passport.authenticate("local", {
    successRedirect:"/",
    failureRedirect: "/login"
}));

app.listen(3000);

