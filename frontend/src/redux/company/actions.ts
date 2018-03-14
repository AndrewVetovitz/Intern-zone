import * as COMPANY_ACTIONS from './types';

export interface FetchCompanies {
    type: COMPANY_ACTIONS.FETCH_COMPANIES;
}

export interface FetchCompaniesRejected {
    type: COMPANY_ACTIONS.FETCH_COMPANIES_REJECTED;
    err: any;
}

export interface FetchCompaniesFullfilled {
    type: COMPANY_ACTIONS.FETCH_COMPANIES_FULLFILLED;
    payload: any;
}

export type CompanyAction = FetchCompanies | FetchCompaniesRejected | FetchCompaniesFullfilled;

export function fetchCompanies(): FetchCompanies {
    return {
        type: COMPANY_ACTIONS.FETCH_COMPANIES
    };
}

export function fetchCompaniesRejected(err: any): FetchCompaniesRejected {
    return {
        type: COMPANY_ACTIONS.FETCH_COMPANIES_REJECTED,
        err: err
    };
}

export function fetchCompaniesFullfilled(payload: any): FetchCompaniesFullfilled {
    return {
        type: COMPANY_ACTIONS.FETCH_COMPANIES_FULLFILLED,
        payload: payload
    };
}