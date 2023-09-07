/** Database setup */

const { Client } = require('pg');

const DB_URI = process.env.DATABASE_URL;

let db = new Client({
    connectionString: DB_URI
});

db.connect();

console.log(process.env.NODE_ENV);

module.exports = db;