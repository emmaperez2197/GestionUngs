'use strict';
/////Api Post
const createEstudiante = require('../routes/Estudiante/create');
const createDocente = require('../routes/Docente/create')


//// Api Get
const traerDocente = require('../routes/Docente/get')
const trarEstudiantes= require('../routes/Estudiante/get')

//api getById
const traerUnDocente = require('../routes/Docente/getById')
const trarUnEstudiantes = require('../routes/Estudiante/getById')

/// api put
const modificarEstudiante = require('../routes/Estudiante/actualizar')

module.exports = [
    createEstudiante, 
    createDocente,
    traerDocente,
    trarEstudiantes,
    traerUnDocente,
    trarUnEstudiantes,
    modificarEstudiante

]