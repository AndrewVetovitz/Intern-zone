import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { StateType } from 'typesafe-actions';

import { companyReducer } from './company';
import { sidebarReducer } from './sidebar';
import { modalReducer } from './modal';

const rootReducer = combineReducers({
    company: companyReducer,
    sidebar: sidebarReducer,
    modal: modalReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
