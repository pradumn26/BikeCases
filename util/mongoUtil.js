const MongoClient = require('mongodb').MongoClient;

const keys = require('../config/keys');

var DB = null;

function connectToDb() {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(keys.mongoURL, function(err, client) {
            if (err)
                reject(err);

            console.log("Connected successfully to server");
            const db = client.db('bikecases');
            DB = db;

            resolve(DB);
        });
    })
}

function getDb() {
    return DB;
}

module.exports = {
    connectToDb,
    getDb
}