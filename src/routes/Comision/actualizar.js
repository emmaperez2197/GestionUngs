'use strict';

const express = require('express');
const app = express();

const Comision = require('../../models/Comision/Comision');

app.put('/comisiones/:id', async (req, res) => {

    const id = req.params.id;
    const {body} = req;
    const { materia,numero,docentes,estudiantes,calificaciones } = body

    const comisionActualizada = new Comision(materia, numero, docentes, estudiantes, calificaciones);    
    await comisionActualizada.actualizar(id);

    res.json({message: 'se actualizo con exito'})

})

module.exports = app