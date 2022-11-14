
    const mongoose = require("mongoose");

    const url = "mongodb://127.0.0.1:27017/test";

    mongoose.connect(url, function(err){
        if (err) throw err;
        console.log("Conexión correcta");
    });

    const objectSchema = {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            firstName: String,
            lastName: String
        }, 
        created: Date, 
        linkedin: {
            type: String,
            validate: {
                validator: function(urlLinkedin){
                    return urlLinkedin.indexOf('https://www.linkedin.com/') == 0;
                }, 
                message: "Linkedin Incorrecto"
            }
        }
    };
    const userSchema = mongoose.Schema(objectSchema);

    let User = mongoose.model('User', userSchema);
    let davinia = {
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Davinia',
            lastName: 'de la Rosa'
        }, 
        created: Date.now(), 
        linkedin: "https://www.linkedin.com/daviniadelarosahernandez"
    };
    let userDavinia = new User (davinia);

    userDavinia.save(function(err){
        if (err) throw err;
        console.log("Inserción correcta");
        mongoose.disconnect();
    });

/* mongoose.disconnect(); */

