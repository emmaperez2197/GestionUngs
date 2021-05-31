'use strict';

const express = require('express')
const app = express();

const Estudiante = require('../../models/Estudiante/Estudiante');

app.delete('/estudiantes/:id', async (req, res) => {

    const id = req.params.id;
    const {nombre, legajo, email} = await Estudiante.getById(id);

    const estudianteEliminado = new Estudiante(nombre, legajo, email);
    estudianteEliminado.status = 'inactive';

    await estudianteEliminado.actualizar(id);

    res.json({
        message: `se elimino con exito el estudiante con el id: ${id}`
    });
    
});

module.exports = app;