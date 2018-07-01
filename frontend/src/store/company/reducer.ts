import { combineReducers } from 'redux';

import { ActionType, getType } from 'typesafe-actions';

import { companyActions } from './actions';

import { CompanyStateProps } from './index';

export type CompanyAction = ActionType<typeof companyActions>;

export default combineReducers<CompanyStateProps, CompanyAction>({
    companyNames: (state = { companyNames: [] }, action: CompanyAction) => {
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
