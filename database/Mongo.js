'use strict';

const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

class Mongo {
	constructor() {
		this.url = 'mongodb://localhost:27017/'
		this.dbName = 'ungs';
	}

	async connect() {
		try {
			const client = await MongoClient.connect(this.url, { useNewUrlParser: true });
			const db = client.db(this.dbName);
			console.log('Connected to the database');
			return db;
		} catch(e) {
			return e;
		}
	}

	async insert(collection, obj) {
		try {
			return (await this.connect()).collection(collection).insertOne(obj);
		} catch(e) {
			console.log(e);
		}
	}
	
	async get(collection) {
		try {
			return (await this.connect()).collection(collection).find({}).toArray();
			
		} catch (error) {
			console.log(error);
		}
	}


	async update(collection, id, obj) {
		return (await this.connect()).collection(collection)
			.updateOne({ _id: ObjectID(id) }, { $set: obj });
	}
}

module.exports = Mongo;