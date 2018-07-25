import { Request, Response } from 'express';
import CompanyModel from '../models/Company';


import db from '../database';

/**
 * GET /company/all
 * Retrieve all company names
 */
export let getAllCompanyNames = (req: Request, res: Response) => {
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
            'AirBNB',
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

