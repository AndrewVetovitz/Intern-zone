import { Request, Response } from 'express';
import CompanyModel from '../models/Company';

import db from '../database';

/**
 * GET /company/all
 * Retrieve all company names
 */
export let getAllCompanyNames = (req: Request, res: Response) => {
    const sql = 'SELECT name FROM company';

    db.query(sql, (err, results: CompanyModel) => {
        if (err) { throw err; }

        res.status(200).json({
            companies: results
        });
    });
};

