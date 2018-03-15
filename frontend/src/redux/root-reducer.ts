import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { companyReducer } from './company/reducer';

import { RootAction } from './root-action';

export const rootReducer = combineReducers<RootAction>({
    router: routerReducer,
    company: companyReducer
});
