import  { applyMiddleware, createStore, compose } from 'redux';

// import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

function configureStore(initialState?: object) {
    const middleWare = applyMiddleware(logger);
    const enhancer = compose(middleWare);

    return createStore(rootReducer, initialState!, enhancer);
}

const store = configureStore();

export default store;
