'use strict'

const db = require('../../../database/queries');
const collection = require('../../../database/collections.json');

     class Comision {
    constructor( materia,numero,docentes,estudiantes,calificaciones ) {

        this.materia = materia; 
        this.numero = numero;
        this.docentes = docentes;
        this.estudiantes = estudiantes;
        this.calificaciones = calificaciones;
    }

    async guardar() {
        try {
            await db.insert(collection.comisiones, this)
        } catch (error) {
            console.log(error);
        }
    }

    static get(){
        try {
            return db.get(collection.comisiones)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Comision