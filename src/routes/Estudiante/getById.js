'use strict';

const express = require('express');

const app = express()

const Estudiante =require('../../models/Estudiante/Estudiante');


app.get('/estudiantes/:id', async (req, res) => {
    
    const id = req.params.id;

    const estudiantes = await Estudiante.getById(id);

    return estudiantes ? res.json({ message: estudiantes }) : res.status(404).json({message: `no se encontro el estudiante con el id: ${id}`})

}) 

module.exports = app