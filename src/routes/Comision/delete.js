'use strict';

 const express = require('express');
 const app = express();

 const Comision = require('../../models/Comision/Comision');

 app.delete('/comisiones/:id' , async (req, res) => {
     
    const id = req.params.id;
    const { materia,numero,docentes,estudiantes,calificaciones } = await Comision.getById(id);
    
    const comisionEliminada =  new Comision(materia, numero, docentes, estudiantes, calificaciones);
    comisionEliminada.status = 'inactive';
    
    await comisionEliminada.actualizar(id);


    res.json({
        message: `se elimino correctamente la comision con el id: ${id}`
    })
 })

 module.exports = app