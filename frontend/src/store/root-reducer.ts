import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { StateType } from 'typesafe-actions';

import { companyReducer } from './company';
import { sidebarReducer } from './sidebar';

const rootReducer = combineReducers({
    company: companyReducer,
    sidebar: sidebarReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
