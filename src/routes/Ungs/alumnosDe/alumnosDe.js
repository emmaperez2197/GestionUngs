'use strict'

const {ObjectID} = require('mongodb')
const Ungs = require('../../../models/Ungs/Ungs')
const Comision = require('../../../models/Comision/Comision')
const express = require('express')
const app = express() 

app.post('/ungs/alumnosDe', async (req, res ) => {

    const {idUngs,idDocente} = req.body
    const ungs = await Ungs.getById(idUngs)
    const idsComisiones = ungs.comisiones.map(id => ObjectID(id));
    
    const comisiones = await Comision.get({  _id: { $in: idsComisiones }})
    
    const setEstudiantes = new Set()
    comisiones.forEach( ({estudiantes, docentes})  => {
        if (Comision.estaDocente(idDocente, docentes)) {
            
            setEstudiantes.add(estudiantes)
        }
    });
    let array = [setEstudiantes]
    
    console.log(array);

    res.json({ message:  array})
})

module.exports = app