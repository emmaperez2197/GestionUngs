'use strict';

const Mongo = require('./Mongo');
const { ObjectID } = require('mongodb');
const db = new Mongo();


module.exports = {
    
    insert:	async (collection, obj)  => {
		try {
			return (await db.connect()).collection(collection).insertOne(obj);
		} catch(e) {
			console.log(e);
		}
	},

    get: async (collection) => {
		try {
			return (await db.connect()).collection(collection).find({}).toArray();
			
		} catch (error) {
			console.log(error);
		}
	},

    findById: async (collection, id) => {
        try {
            return  (await db.connect()).collection(collection).findOne({ _id: ObjectID(id)})
        } catch (error) {
            console.log(error);
        }
    },

    update: async (collection, id, obj) => {
		return (await db.connect()).collection(collection)
			.updateOne({ _id: ObjectID(id) }, { $set: obj });
	}

}