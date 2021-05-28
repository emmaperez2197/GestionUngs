'use strict';

const express = require('express');

const app = express();

const Comision = require('../../models/Comision/Comision');


app.get('/comisiones', async (req, res) => {

    const comisiones = await Comision.get();

    res.json({ 
        message: comisiones
    })

})

module.exports = app