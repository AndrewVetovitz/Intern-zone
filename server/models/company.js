const db = require('../database');

exports.queryall = function queryall(callback) {
    const sql = 'SELECT name FROM company';

    db.query(sql, (error, results) => {
        if (error) throw error;

        return callback(results);
    });
};
