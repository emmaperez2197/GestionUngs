'use strict';

const { ObjectID } = require('mongodb');

const express = require('express');
const app = express();

const Ungs = require('../../../models/Ungs/Ungs')
const Comision = require('../../../models/Comision/Comision')
const Estudiante = require('../../../models/Estudiante/Estudiante')

app.post('/ungs/los-mejores', async (req, res) => {

    const {idUngs} = req.body;
    const ungs = await Ungs.getById(idUngs);

    const idsComisiones = ungs.comisiones.map(id => ObjectID(id));
    const comisiones = await Comision.get({  _id: { $in: idsComisiones } });


    let idMejoresAlumnos = []
    comisiones.forEach(comision => {
        idMejoresAlumnos.push(Comision.estudianteConMejorNota(comision))
    });   
    
    const estudiantes = await Estudiante.get({ _id : {$in: idMejoresAlumnos.map(id => ObjectID(id))}})
    console.log(estudiantes
        );
    res.json({estudiantes})
})

module.exports = app