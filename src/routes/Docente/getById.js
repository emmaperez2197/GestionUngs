'use strict'

const express = require('express')

const app= express()

const Docente = require('../../models/Docente/docente')


app.get('/docente/:id', async (req, res) => {

    const id = req.params.id

    const docente = await Docente.getById(id);

    return docente ? res.json({ message: docente} ) : res.status(404).json({message: `No se encontro un docente con el id: ${id}`})
})

module.exports = app








////crear api get de estudiantes por id y crear el modelo de clase comision