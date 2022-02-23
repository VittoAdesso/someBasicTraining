// 1. requiero la libreria y le doy nombre como lo hacía en express 

let mysql = require('mysql'); 

// 2. creamos conexión 

let connectionBD = mysql.createConnection({
    host: '185.45.74.25',
    database: 'vga_rest360',
    user: 'bcfsdsep2021',
    password: '0?xZs41lUgk^q859', 
}); 

// 3. manejamos error de conexión 
connectionBD.connect(function(error){
    if(error){
        throw error; 
    } else{
        console.log('CONEXIÓN EXITOSA'); 
    }

}); 


// 5. en packjson le digo al start que se llamará nodemon app.js, y es lo que pongo en terminal
// 6. llamamos en terminal nodemon app.js para que se arranque y actualice cambios en vivo
// 7.  instalo express, nodemon -D , y me creo nueva folder src con server para tener el listen un 3000

//8. para hacer consultas, revisa doc npm y hacer ésto tb 

// connectionBD.query('SELECT * from usuarios', function(error, results, fields){ // me la lee
connectionBD.query('SELECT * from comandas', function(error, results, fields){ // me la lee
// connectionBD.query('SELECT * from comadasuser', function(error, results, fields){ // no lee ésta 
// connectionBD.query('SELECT * from comandacabecera', function(error, results, fields){ // no lee ésta 

    

    if(error)
        throw error; 

        results.forEach(result => {
            console.log(result)
        }); 
    
}); 

// 4. avisamos que cierre conexión
connectionBD.end(); 

