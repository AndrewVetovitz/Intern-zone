const Company = require('../models/company');

exports.getall = function getall(req, res) {
    Company.queryall((companies) => {
        res.status(200).json({
            companies: companies
        });
    });
};
