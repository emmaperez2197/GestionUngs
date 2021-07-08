'use strict';

const { ObjectID } = require('mongodb');
const express = require('express')
const app = express()
const Ungs = require('../../../models/Ungs/Ungs')
const Comision  = require('../../../models/Comision/Comision')

app.post('/ungs/unicaComision', async (req, res) => {

    const {idUngs} = req.body;
    const ungs = await Ungs.getById(idUngs)

    const idsComisiones = ungs.comisiones.map(id => ObjectID(id));
    const comisiones = await Comision.get({  _id: { $in: idsComisiones }});

    const materias = [];

    comisiones.forEach( ({materia}) => {

        if(!materias.includes(materia)) {
            materias.push(materia)
        }
        else{
            let indice = materias.indexOf(materia);
            materias.splice(indice,1)
        }
    })

    res.json({message: materias})
})

module.exports = app;