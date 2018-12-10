import { combineReducers } from 'redux';

import { ActionType, getType } from 'typesafe-actions';

import { companyActions } from './actions';

import { CompanyState } from './types';

export type CompanyAction = ActionType<typeof companyActions>;

const initalCompanyState: CompanyState = {
    companyInfo: {
        companyNames: [],
        fetching: false,
        fetched: false,
        error: null
    }
}

export default combineReducers<CompanyState, CompanyAction>({
    companyInfo: (state = initalCompanyState.companyInfo, action: CompanyAction) => {
        switch (action.type) {
            case getType(companyActions.fetchCompanies): {
                return {...state, fetching: true};
            }
            case getType(companyActions.fetchCompaniesRejected): {
                return {...state, fetching: false, error: action};
            } 
            case getType(companyActions.fetchCompaniesFullfilled): {
                return {...state, companyNames: action.payload, fetching: false, fetched: true};
            }
            default: {
                return state;
            }
        }
    }
});
