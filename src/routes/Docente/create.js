'use strict';

const express = require('express');

const app = express();

const Docente = require('../../models/Docente/docente')


// const {validateString, validateDni} = require('../../validations/validation')

app.post('/docente', async (req, res)=> {

    const {body} = req;
    
    // validatorBody(body,'nombre',res)
    // validatorBody(body,'dni',res)

    // if (!validateString(body.nombre))
    //     return res.status(400).json(`El valor ingresado no es un nombre: ${body.nombre}`)

    // if (!validateDni(body.dni))
    //     return res.status(400).json(`El valor ingresado no es un dni: ${body.dni}`)

    const nuevoDocente =  new Docente(body.nombre, body.dni)

    await nuevoDocente.guardar();
 
    res.json({
        message: 'se creo docente con exito'
    })

        
})

module.exports = app;

// const validatorBody = (body, key, res) => {

//     if (!Object.keys(body).includes(key)) {

//         res.status(400).json('se necesitan los datos: nombre y Dni')    
//     }

// }