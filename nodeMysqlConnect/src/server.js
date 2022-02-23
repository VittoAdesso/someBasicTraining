'use strict'; 

const express = require('express'); 
const app = express(); 

app.use('/', (req, res)=> {
    res.status(200).send('API FUNCIONA'); 
}); 

app.listen(3000); 