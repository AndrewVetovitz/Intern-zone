const db = require('../database');
const Company = require('../models/company');

exports.getall = function(req, res, next) {
    Company.queryall((companies) => {
        return res.status(200).json({
            companies: companies
        });
    });
}
