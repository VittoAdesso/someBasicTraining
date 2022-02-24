const express = require('express'); 
const Sequelize = require('sequelize'); 
const app = express (); 


const sequelize = new Sequelize('vga_rest360','bcfsdsep2021','0?xZs41lUgk^q859',{
    host: '185.45.74.25', 
    dialect: 'mysql'

})

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conectó')
  })


  const User = sequelize.define('usuarios', {
    id: {type: Sequelize.SMALLINT, primaryKey: true},
    user: Sequelize.STRING,
    email: Sequelize.STRING,
    telefono: Sequelize.STRING,
    password: Sequelize.STRING,
  })
  
   User.findAll({ attributes: ['user', 'email', 'telefono', 'password'] })
   .then(users => {
     console.log(users)
   })
   .catch(err => {
     console.log(err)
   })

  // User.findById(1,{ attributes: ['user'] })
  // .then(user => {
  //   console.log(user.toJSON())
  // })
  // .catch(err => {
  //   console.log(err)
  // })

//   User.findAll(
//     where: {
//         user: 'Vittorio'
//     }
// )
//   .then(user => {
//     console.log(user.JSON())
//   })
//   .catch(err => {
//     console.log(err)
//   })