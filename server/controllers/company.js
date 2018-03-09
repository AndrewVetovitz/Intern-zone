const Company = require('../models/company');

exports.getall = function getall(req, res) {
    Company.queryall((companies) => {
        return res.status(200).json({
            companies: companies
        });
    });
};
