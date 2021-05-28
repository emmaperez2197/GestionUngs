'use strict';
/////Api Post/////
const createEstudiante = require('../routes/Estudiante/create');
const createDocente = require('../routes/Docente/create');
const createComision = require('../routes/Comision/create');

/////Api Get/////
const traerDocente = require('../routes/Docente/get');
const trarEstudiantes= require('../routes/Estudiante/get');
const traerComisiones = require('../routes/Comision/get')

/////Api getById /////
const traerUnDocente = require('../routes/Docente/getById')
const trarUnEstudiantes = require('../routes/Estudiante/getById')

/////Api Put/////
const modificarEstudiante = require('../routes/Estudiante/actualizar')
const modificarDocente = require('../routes/Docente/actualizar')


module.exports = [
    createEstudiante, 
    createDocente,
    traerDocente,
    trarEstudiantes,
    traerUnDocente,
    trarUnEstudiantes,
    modificarEstudiante,
    modificarDocente,
    createComision,
    traerComisiones

]