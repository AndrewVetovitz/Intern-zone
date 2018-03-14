import  { createStore } from 'redux';
// import  { applyMiddleware, createStore } from 'redux';

// import promise from 'redux-promise-middleware';
// import logger from 'redux-logger';

import { StoreState } from './redux/types';

import companyReducer from './redux/company/reducer';

// const middleWare = applyMiddleware(promise(), logger);

const store = createStore<StoreState>(companyReducer, { companyNames: [] });

export default store;

