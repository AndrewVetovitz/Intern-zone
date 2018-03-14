// import  { createStore } from 'redux';
import  { applyMiddleware, createStore, compose } from 'redux';

// import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import { StoreState } from './redux/types';

import companyReducer from './redux/company/reducer';

const middleWare = applyMiddleware(logger);
const enhancer = compose(middleWare);

const store = createStore<StoreState>(companyReducer, { companyNames: [] }, enhancer);

export default store;
