'use strict';

const express = require('express');
const app = express();

const Ungs = require('../../models/Ungs/Ungs');

app.get('/ungs/:id', async (req, res) => {

    const id = req.params.id;
    const ungs = await Ungs.getById(id);

    res.json({ message: ungs })

});

module.exports = app
