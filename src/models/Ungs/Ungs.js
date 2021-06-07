'use strict';
const db = require('../../../database/queries')
const collection = require('../../../database/collections.json');

class Ungs {
    constructor(comisiones) {
        this.comisiones = comisiones
    }

    async guardar(){
        try {
            await db.insert(collection.ungs, this)
        } catch (error) {
            console.log(error);
        }
    }

    static getById (id) {
        try {
            return db.findById(collection.ungs, id)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Ungs