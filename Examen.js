//Mateo Andres Espinosa Restrepo
//Juan Sebastian Carvajal Goez
//Ana Maria Carmona Garcia
//Ficha: 2561204


const express = require('express');
const app = express();

const host = 'localhost';
const port = 3000;

//Este es el params
// app.get('/home/:animal/:nombre/:raza', (req, res)=>{
//     res.send(`Tu mascota es un ${req.params.animal}, de nombre  ${req.params.nombre} y raza ${req.params.raza}`)
// })

//Este es el query
// app.get('/home', (req, res)=>{
//     res.send(`Tu mascota es un ${req.query.animal} y raza ${req.query.raza}`)
// })

//Este es el body con json
// app.use(express.json())
// app.get('/home', (req,res)=>{
//     res.send(`Estos son los datos almacenados en el body: ${req.body.animal} de raza ${req.body.raza}`)
//     console.log(req.body)
// })


//este es body mediante form-encoded
// app.use(express.urlencoded({extended: false}))
// app.get('/formulario', (req,res)=>{
//     (res.send(`${req.body.animal}, ${req.body.raza}, ${req.body.nombre}`))
//     const valor = (`${req.body.animal}, ${req.body.raza}, ${req.body.nombre}`)

//          console.log(valor)
//     })




//este es el body mediante texto
// app.use(express.text())
// app.get('/home', (req, res) => {
//     res.send(`work done`)
//     console.log(req.body)
// })


app.listen(port, host, ()=>{
    console.log(`Este es el servidor: http://${host}:${port}`)
})