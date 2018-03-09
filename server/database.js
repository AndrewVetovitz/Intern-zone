const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '14anvetovitz',
    database: 'internzone'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to DB');
        throw err;
    }

    console.log('Connected to mysql!');
});

module.exports = db;
