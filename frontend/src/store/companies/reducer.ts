import { combineReducers } from 'redux';

import { ActionType, getType } from 'typesafe-actions';

import { companiesActions } from './actions';

import { CompaniesState } from './types';

export type CompaniesAction = ActionType<typeof companiesActions>;

const initalCompanyState: CompaniesState = {
    companies: {
        companyNames: [],
        fetching: false,
        fetched: false,
        error: null
    }
}

export default combineReducers<CompaniesState, CompaniesAction>({
    companies: (state = initalCompanyState.companies, action: CompaniesAction) => {
        switch (action.type) {
            case getType(companiesActions.fetchCompanies): {
                return {...state, fetching: true};
            }
            case getType(companiesActions.fetchCompaniesRejected): {
                return {...state, fetching: false, error: action};
            } 
            case getType(companiesActions.fetchCompaniesFullfilled): {
                return {...state, companyNames: action.payload, fetching: false, fetched: true};
            }
            default: {
                return state;
            }
        }
    },
});
