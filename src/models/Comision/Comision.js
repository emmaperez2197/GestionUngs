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
        this.status = 'active'
    }

    async guardar() {
        try {
            await db.insert(collection.comisiones, this)
        } catch (error) {
            console.log(error);
        }
    }

    async actualizar(id) {
       try {
           await db.update(collection.comisiones, id, this)
       } catch (error) {
            console.log(error);
       }
    }

    static get(filters = {}){
        try {
            return db.get(collection.comisiones, filters)
        } catch (error) {
            console.log(error);
        }
    }

    static getById(id){
        try {
            return db.findById(collection.comisiones, id)
        } catch (error) {
            console.log(error);
        }
    }

   static estudianteConMejorNota({ calificaciones, estudiantes}) {

        const mejorCalificacion = Math.max.apply(null, calificaciones)
        console.log(mejorCalificacion);
        return estudiantes[calificaciones.indexOf(mejorCalificacion)]
    }

}

module.exports = Comision