import  { applyMiddleware, createStore, compose } from 'redux';

// import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import { companyReducer } from './company';

function configureStore(initialState?: {}) {
    const middleWare = applyMiddleware(logger);
    const enhancer = compose(middleWare);

    return createStore(companyReducer, initialState!, enhancer);
}

const store = configureStore();

export default store;
