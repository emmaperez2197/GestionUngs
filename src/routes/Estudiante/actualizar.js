'use strict';


const express = require('express');

const app = express();

const Estudiante = require('../../models/Estudiante/Estudiante')

const {validateName, validateLegajo,validateEmail} = require('../../validations/validation-estudiante');
 

app.put('/estudiantes/:id', async (req, res) => {

    const id = req.params.id;
    const {body} = req;

    validationBody(body,'nombre', res);
    validationBody(body,'legajo', res);
    validationBody(body,'email', res);


    if(!validateName(body.nombre))
        return res.status(400).json(`El valor ingresado no es un nombre: ${body.nombre}`)

    if (!validateLegajo(body.legajo))
        return res.status(400).json(`El valor ingresado no es un legajo: ${body.legajo}`)

    if (!validateEmail(body.email))
        return res.status(400).json(`El valor ingresado no es email: ${body.email}`)

    const estudianteActualizado = new Estudiante(body.nombre, body.legajo,body.email)
    await estudianteActualizado.actualizar(id)

    res.json({
        message: 'estudiante actualizado con exito'
    })
})

const validationBody = (body, key, res) => {
    if(!Object.keys(body).includes(key)) {

        return res.status(400).json(`se necesitan los datos: nombre y legajo`)
    }
}

module.exports = app


