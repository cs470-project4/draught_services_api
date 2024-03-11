const { Pool }      = require('pg');

/*
var connection = mysql.createConnection({
//    debug: true,

    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
});
*/

// Using connection pooling
const pool = new Pool({
    host: 'localhost',
    port: 5432, // Default port for PostgreSQL
    user: 'michael', 
    password: 'bkk',
    database: 'draught_services'
});

module.exports = pool;
