'use strict';

const { ObjectID } = require('mongodb');
const Ungs = require('../../../models/Ungs/Ungs');
const Comision = require('../../../models/Comision/Comision')
const express = require('express')
const app = express()

app.post('/ungs/suficientes-docentes', async (req, res) => {

    const {idUngs} = req.body
    
    const ungs = await Ungs.getById(idUngs)

    const idsComisiones = ungs.comisiones.map(id => ObjectID(id));

    const comisiones = await Comision.get({ _id: { $in: idsComisiones } })

    comisiones.forEach(({estudiantes, docentes}) => {
        
        const cantDocentesQDeberiaHaber = Math.trunc(estudiantes.length / 20);
      
    });
  

    res.json({ message: comisiones })
})
 
module.exports = app