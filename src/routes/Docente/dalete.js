'use strict';

const express = require('express');
const app = express();

const Docente = require('../../models/Docente/docente');


app.delete('/docentes/:id', async (req, res) => {

    const id = req.params.id

    const {nombre, dni} = await Docente.getById(id)
    
    const docenteEliminado = new Docente(nombre,dni);
    docenteEliminado.status = 'inactive';

    await docenteEliminado.actualizar(id);

    res.json({message: `se elimino el docente con el id: ${id}`})
})


module.exports = app