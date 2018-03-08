const express = require('express');

const CompanyController = require('./controllers/company');

module.exports = function(app) {
    const apiRoutes = express.Router();
    const companyRoutes = express.Router();

    // company routes
    apiRoutes.use('/company', companyRoutes);

    companyRoutes.get('/all', CompanyController.getall);

    // all routes appended to app
    app.use('', apiRoutes);
}