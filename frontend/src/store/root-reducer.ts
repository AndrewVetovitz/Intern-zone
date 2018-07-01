import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { StateType } from 'typesafe-actions';

import { companyReducer } from './company';

const rootReducer = combineReducers({
    router: routerReducer,
    company: companyReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
