'use strict';

const db = require('../../../database/queries')
const collection = require('../../../database/collections.json')


class Docente {

    constructor(nombre, dni) {
        this.nombre = nombre,
        this.dni = dni
    }

    async guardar() {
        try {
            await db.insert(collection.docentes, this)
        } catch (error) {   
            throw new Error(err)
        }
    }

    async actualizar (id) {
        try {
            await db.update(collection.docentes, id, this)
        } catch (error) {
            console.log(error);
        }
    }

    static get(){
        try {
            return db.get(collection.docentes)
        } catch (error) {
            console.log(error);
        }
    }

    static getById(id){
        try {
            return db.findById(collection.docentes,id)
        } catch (error) {
            console.log(error);
        }
    }

   
};

module.exports= Docente


