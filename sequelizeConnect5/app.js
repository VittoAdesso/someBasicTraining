// declaro variables y las requiero
const express = require('express'); 
const Sequelize = require('sequelize');
const app = express();


// conecto la base de datos
const sequelize = new Sequelize('vga_rest360','bcfsdsep2021','0?xZs41lUgk^q859', {
    host: '185.45.74.25',
    dialect: 'mysql'
})

// creo modelos de mi tabla
// ojo, en define llamo a la tabla que quiero utilizar 
const userModel = sequelize.define('usuarios',{

    "idUser": {type:Sequelize.INTEGER, primaryKey:true}, 
    "user": Sequelize.STRING,
    "password": Sequelize.INTEGER,
    // "telefono": Sequelize.INTEGER, 
    // "email": Sequelize.STRING

})

// creo modelos de mi tabla
// ojo, en define llamo a la tabla que quiero utilizar 
const userModel2 = sequelize.define('usuarios',{

    "idUser": {type:Sequelize.INTEGER, primaryKey:true}, 
    "telefono": Sequelize.INTEGER, 
    "email": Sequelize.STRING

})


// creo modelos de mi tabla (PRUEBO DE OTRA TABLA )
// ojo, en define llamo a la tabla que quiero utilizar 
const userModel3 = sequelize.define('comandas',{

    "idcomanda": Sequelize.INTEGER, 
})
// SIEMPRE LOS PIDO CON PROMESAS 
// conecto y autentico 
    sequelize.authenticate()
    .then(()=>{
        console.log('SEQUELIZE IS CONNECTED TO MYSQL')
    })
    .catch(err => {
        console.log('ERROR', error)
    })

    // busco pintar los modelos de la base de datos 

    // SIEMPRE LOS PIDO CON PROMESAS 
    // ATTRIBUTES, le digo los que quiero que me pinte, tantos como desee 

    // prueba A
        userModel.findAll({attributes:['user','password']})
        .then( user1 => {
            // como me lo pinta en array de objetos, le digo que me trasnforme el contendo
            const result1 = JSON.stringify(user1)
                console.log(result1)
        })
        .catch(error => {
            console.log('ERROR', error)
        })

        // PRUEBA B 
        userModel2.findAll({attributes:['telefono','email']})
            .then( user2=> {
            // como me lo pinta en array de objetos, le digo que me trasnforme el contendo
            const result2 = JSON.stringify(user2)
                console.log(result2)
        })
            .catch(error => {
                console.log('ERROR', error)
        }) 

        // PRUEBA C
        userModel3.findAll({attributes:['idcomanda']})
            .then( results => {
            // como me lo pinta en array de objetos, le digo que me trasnforme el contendo
            const result3= JSON.stringify(results)
                console.log(result3)
        })
            .catch(error => {
                console.log('ERROR', error)
        })

    //LEVANTO SERVIDOR 

app.listen( 3000, () => {
    console.log('Server is up into host:3000'); 
})