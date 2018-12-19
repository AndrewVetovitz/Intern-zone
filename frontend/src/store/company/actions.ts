import { createAction } from 'typesafe-actions';

import { CompanyState } from './types';

export const companyActions = {
    fetchCompany: createAction('FETCH_COMPANY'),
    fetchCompanyFullfilled: createAction('FETCH_COMPANY_FULLFILLED', resolve => {
        return (payload: CompanyState) => resolve(payload);
    }),
    fetchCompanyRejected: createAction('FETCH_COMPANY_REJECTED', resolve => {
        return (err: any) => resolve(err);
    })
};
