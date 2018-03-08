const db = require('../database');

exports.queryall = function(callback) {
    const sql = 'SELECT name FROM company';

    db.query(sql, (error, results, fields) => {
        if(error) throw error;

        return callback(results);
    });
}
