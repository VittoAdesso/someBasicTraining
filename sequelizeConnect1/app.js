const express = require('express'); 
const Sequelize = require('sequelize'); 
const app = express (); 


// definimos parámetros de conexión a la base de datos MySQL 

const sequelize = new Sequelize('vga_rest360','bcfsdsep2021','0?xZs41lUgk^q859',{
    host: '185.45.74.25', 
    // host: 'localhost',
    dialect: 'mysql'

})

// definimos el modelo 

const usuariosModel = sequelize.define('usuarios', {
    "id": { type:Sequelize.INTEGER, primaryKey:true},
    "user": Sequelize.STRING,
    "email": Sequelize.STRING ,
    "telefono": Sequelize.INTEGER,
    "password": Sequelize.STRING,
})

sequelize.authenticate()
    .then(() => {
        console.log('CONEXIÓN A LA BASE DE DATOS OK'); 
    })
    .catch( error => {
        console.log('ERROR DE CONEXIÓN:' + error);
    });

//métodos 

    usuariosModel.findAll({atributes:['user', 'telefono']})
        .then(usuarios =>{ 
            console.log(usuarios);
        })
        .catch(error => {
            console.log(error)
        }); 

app.listen(3000, ()=> {
    console.log('server up en localhost:3000'); 
}); 

