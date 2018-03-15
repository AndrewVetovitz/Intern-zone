import { createAction } from 'typesafe-actions';

export const companyActions = {
    fetchCompanies: createAction('FETCH_COMPANIES'),
    fetchCompaniesFullfilled: createAction('FETCH_COMPANIES_FULLFILLED', (payload: any) => ({
        type: 'FETCH_COMPANIES_FULLFILLED',
        payload: payload
    })),
    fetchCompaniesRejected: createAction('FETCH_COMPANIES_REJECTED', (err: any) => ({
        type: 'FETCH_COMPANIES_REJECTED',
        payload: err
    }))
};
