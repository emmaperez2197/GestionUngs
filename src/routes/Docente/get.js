'use strict';

const express = require('express');

const app = express();

const Docente = require('../../models/Docente/docente')


app.get('/docente', async (req, res) => { 

    const docentes = await Docente.get();

   res.json({
       message: docentes
   })
})

module.exports = app