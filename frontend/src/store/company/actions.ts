import { createAction } from 'typesafe-actions';

export const companyActions = {
    fetchCompanies: createAction('FETCH_COMPANIES'),
    fetchCompaniesFullfilled: createAction('FETCH_COMPANIES_FULLFILLED', resolve => {
        return (payload: string[]) => resolve(payload);
    }),
    fetchCompaniesRejected: createAction('FETCH_COMPANIES_REJECTED', resolve => {
        return (err: any) => resolve(err);
    })
};
