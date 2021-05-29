'use strict';

const express = require('express')
const app = express()

const Comision = require('../../models/Comision/Comision');
const {validateString, validateNumber,validationKeys} = require('../../validations/validation')
const dataNecesaria = 'materia,numero,docentes,estudiantes,calificaciones'
app.post('/comisiones', async (req, res) => {

    const {body} = req
    const { materia,numero,docentes,estudiantes,calificaciones } = body
    
    validationKeys(body,'materia',res,dataNecesaria);
    validationKeys(body,'numero',res,dataNecesaria);
    validationKeys(body,'docentes',res,dataNecesaria);
    validationKeys(body,'estudiantes',res,dataNecesaria);
    validationKeys(body,'calificaciones',res,dataNecesaria);
    
    const comision = new Comision(materia,numero,docentes,estudiantes,calificaciones)
    await comision.guardar()
    
    res.json({
        message : 'se creo la comision con exito'
    })

})

module.exports = app

