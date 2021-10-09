const mysql = require('mysql2');

// connect to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // username
        user: 'root',
        // mySQL password
        password: 'kTM-150xcW',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
