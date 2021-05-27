'use strict';

const { MongoClient } = require('mongodb');


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
}

module.exports = Mongo;