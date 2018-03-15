import { getType } from 'typesafe-actions';
import { Action } from '../types';

import { companyActions } from './actions';
import { CompanyState } from './types';

const initalState: CompanyState = {
    companyNames: []
};

export const companyReducer = (state: CompanyState = initalState, action: Action) => {
    switch (action.type) {
        case getType(companyActions.fetchCompanies) : {
            return {...state, fetching: true};
        }
        case getType(companyActions.fetchCompaniesRejected) : {
            return {...state, fetching: false, error: action.payload};
        } 
        case getType(companyActions.fetchCompaniesFullfilled) : {
            return {...state, companyNames: action.payload, fetching: false, fetched: true};
        }
        default : {
            return state;
        }
    }
};
