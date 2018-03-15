import  { applyMiddleware, createStore, compose } from 'redux';

// import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import { companyReducer } from './redux/company/reducer';

const middleWare = applyMiddleware(logger);
const enhancer = compose(middleWare);

const store = createStore(companyReducer, { companyNames: [] }, enhancer);

export default store;
