import { combineReducers } from 'redux';

import { ActionType, getType } from 'typesafe-actions';

import { companyActions } from './actions';

import { CompanyState } from './types';

export type CompanyAction = ActionType<typeof companyActions>;

const initalCompanyState: CompanyState = {
    company: {
        name: '',
        description: '',
        postings: [],
        fetching: false,
        fetched: false,
        error: null
    }
}

export default combineReducers<CompanyState, CompanyAction>({
    company: (state = initalCompanyState.company, action: CompanyAction) => {
        switch (action.type) {
            case getType(companyActions.fetchCompany): {
                return {...state, fetching: true};
            }
            case getType(companyActions.fetchCompanyRejected): {
                return {...state, fetching: false, error: action};
            } 
            case getType(companyActions.fetchCompanyFullfilled): {
                return {...state, ...action.payload, fetching: false, fetched: true};
            }
            default: {
                return state;
            }
        }
    }
});
