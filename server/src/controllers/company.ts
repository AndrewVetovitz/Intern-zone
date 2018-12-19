import { Request, Response } from 'express';
// import CompanyModel from '../models/Company';

import db from '../database';

/**
 * GET /company/all
 * Retrieve all company names
 */
const getAllCompanyNames = (req: Request, res: Response) => {
    const sql = 'SELECT * FROM company';

    res.status(200).json({
        companies: [
            'Amazon',
            'Google',
            'Facebook',
            'Microsoft',
            'Two Sigma',
            'Goldman Sachs',
            'Apple',
            'Texas Instruments',
            'De Shaw',
            'MongoDB',
            'Airbnb',
            'Walmart',
            'Visa',
            'Stripe'
        ]
    });

    // db.query(sql, (err, results: CompanyModel) => {
    //     if (err) { throw err; }

    //     res.status(200).json({
    //         companies: results
    //     });
    // });
};

const getCompanyByName = (req: Request, res: Response) => {
    const name = req.params.name;

    // const sql = 'SELECT * FROM company WHERE name=\'' + name + '\'';

    res.status(200).json({
        company: {
            name: name,
            description: name + ' full desciption',
            postings: [
                {
                    positionName: 'software',
                    location: 'california',
                    link: 'https://google.com'
                },
                {
                    positionName: 'software',
                    location: 'california',
                    link: 'https://google.com'
                },
                {
                    positionName: 'software',
                    location: 'california',
                    link: 'https://google.com'
                }
            ]
        }
    });
};

export { getAllCompanyNames, getCompanyByName };
