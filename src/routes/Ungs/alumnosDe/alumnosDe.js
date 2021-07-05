'use strict'

const Ungs = require('../../../models/Ungs/Ungs')
const express = require('express')
const app = express() 

app.post('/ungs/alumnosDe', async (req, res ) => {

    res.json({ message: 'ok'})
})

module.exports = app