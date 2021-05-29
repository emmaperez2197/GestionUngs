'use strict';
const express = require('express');
const app = express();

const Comision = require('../../models/Comision/Comision');


app.get('/comisiones/:id', async (req, res) =>{
    
    const id = req.params.id

    const comision = await Comision.getById(id)
   
    return comision ? res.json({ message: comision }) : res.status(404).json({message: `no se encontro comision con el id:${id}`})
})

module.exports = app