'use strict';

const express = require('express')
const app = express()

const Comision = require('../../models/Comision/Comision');

app.post('/comisiones', async (req, res) => {

    const {body} = req
    const { materia,numero,docentes,estudiantes,calificaciones } = body

    const comision = new Comision(materia,numero,docentes,estudiantes,calificaciones)
    await comision.guardar()
    
    res.json({
        message : 'se creo la comision con exito'
    })

})

module.exports = app