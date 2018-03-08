const db = require('../database');

exports.getall = function(req, res, next) {
    const sql = 'SELECT name FROM company';

    db.query(sql, (error, results, fields) => {
        if(error) throw error;

        res.status(200).json({
            companies: results
        });
    });
}
