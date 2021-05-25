'use strict';

const Mongo = require('../../../database/Mongo')

const db = new Mongo()

class Docente {

    constructor(nombre, dni) {
        this.nombre = nombre,
        this.dni = dni
    }

    async guardar() {
        try {
            await db.insert('docentes', this)
        } catch (error) {   
            throw new Error(err)
        }
    }

    static get(){
        try {
            return db.get('docentes')
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports= Docente


