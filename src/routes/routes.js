'use strict';

const createEstudiante = require('../routes/Estudiante/create');
const createDocente = require('../routes/Docente/create')

const traerDocente = require('../routes/Docente/get')

module.exports = [
    createEstudiante, 
    createDocente,
    traerDocente
]