'use strict';

const db = require('../../../database/queries')
const collection = require('../../../database/collections.json')
class Estudiante {
    
    constructor(nombre, legajo,email) {
        this.nombre = nombre;
        this.legajo = legajo;
        this.email = email;
    }

    async guardar(){
        try {
            await db.insert(collection.estudiantes, this)
        } catch(err) {
            throw new Error(err);
        }
    } 

    async actualizar(id) {
        try {
            await db.update(collection.estudiantes, id, this)
        } catch (error) {
            console.log(error);
        }
    }

    static get(){
        try {
            return db.get(collection.estudiantes)
        } catch (error) {
            console.log(error);
        }
    }

    static getById(id) {
        try {
            return db.findById(collection.estudiantes, id)
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = Estudiante
