'use strict';

const Mongo = require('../../../database/Mongo')

const db = new Mongo();

class Estudiante {
    
    constructor(nombre, legajo,email) {
        this.nombre = nombre;
        this.legajo = legajo;
        this.email = email;
    }

    async guardar(){
        try {
            await db.insert('estudiantes', this)
        } catch(err) {

            throw new Error(err);
        }
    } 


}

module.exports = Estudiante
