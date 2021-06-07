'use strict';

const express = require('express');
const app = express();

const Ungs = require('../../models/Ungs/Ungs');

app.post('/ungs', async (req, res) => {

    const {body} = req;

    const ungs = new Ungs(body.comisiones);
    await ungs.guardar();

    res.json({
        message: 'se creo con exito'
    });
});

module.exports = app