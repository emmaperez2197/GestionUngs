'use strict';

const express = require('express');
const app = express();

const Docente = require('../../../models/Docente/docente');
const Estudiante = require('../../../models/Estudiante/Estudiante');
const Ungs = require('../../../models/Ungs/Ungs');
const Comision = require('../../../models/Comision/Comision');

app.post('/ungs/cursa-con/:idEstudiante/:idDocente', async (req, res) => {

    const {idUngs} = req.body;
    const {idEstudiante, idDocente} = req.params;

    const ungs = await Ungs.getById(idUngs)
    const estudiante = await Estudiante.getById(idEstudiante);
    const docente = await Docente.getById(idDocente);

    if (!ungs) 
        return res.status(400).json(`no se encontro ungs con el id ${idUngs} `)

    if (!docente) 
        return res.status(400).json(`no se encontro docente con el id ${idDocente} `)

    if (!estudiante) 
        return res.status(400).json(`no se encontro estudiante con el id ${idEstudiante} `)

    const {comisiones} = ungs

    let estanJuntos = false;

    comisiones.forEach( async idComision => {

        const {estudiantes, docentes} = await Comision.getById(idComision)
        
        if (estudiantes.includes(idEstudiante) && docentes.includes(idDocente)) {

            estanJuntos = estanJuntos || true
        }
        
        res.json({ message: estanJuntos })
    });
    
    console.log(estanJuntos);
})

module.exports = app