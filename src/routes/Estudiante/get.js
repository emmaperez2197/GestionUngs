'use strict';

const express = require('express')

const app = express();

const Estudiante = require('../../models/Estudiante/Estudiante')


app.get('/estudiantes', async (req, res) => {

        const estudiantes = await Estudiante.get()

        res.json({
            message: estudiantes
        })
})


module.exports = app