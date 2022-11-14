const Sequelize = require('sequelize')

const sequelize = new Sequelize('test', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log('No conectado: ' + err)
    });

const Users = sequelize.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING
});

Users.findAll({ attributes: ['id', 'firstname', 'lastname'] })
    .then(users => {
        console.log(users[0].dataValues)
    })
    .catch(err => {
        console.log(err)
    });