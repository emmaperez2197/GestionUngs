'use strict';

const express = require('express')

const app = express()

const Docente = require('../../models/Docente/docente')

const {validateName, validateLegajo,validateEmail} = require('../../validations/validation');

app.put('/docentes/:id', async (req, res) => {

    const id = req.params.id
    const {body} = req

    const docenteActualizado = new Docente(body.nombre, body.dni);
    
    console.log(docenteActualizado);
    await docenteActualizado.actualizar(id)

    res.json({
        message: 'se actualizo con exito el usuario docente'
    })

})

module.exports = app