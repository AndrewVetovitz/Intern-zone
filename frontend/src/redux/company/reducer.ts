import { CompanyAction } from './actions';
import { StoreState } from '../types';
import * as COMPANY_ACTION from './types';

export default function companyReducer(state: StoreState, action: CompanyAction) {
    switch (action.type) {
        case COMPANY_ACTION.FETCH_COMPANIES: {
            return {...state, fetching: true};
        }
        case COMPANY_ACTION.FETCH_COMPANIES_REJECTED : {
            return {...state, fetching: false, error: action.err};
        } 
        case COMPANY_ACTION.FETCH_COMPANIES_FULLFILLED : {
            return {...state, companyNames: action.payload, fetching: false, fetched: true};
        }
        default : {
            return state;
        }
    }
}
