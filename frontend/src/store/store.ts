import  { applyMiddleware, createStore, compose, Middleware } from 'redux';

// import promise from 'redux-promise-middleware';

import rootReducer from './root-reducer';

function configureStore(initialState?: object) {
    let middleware: Middleware[] = [];

    if (process.env.NODE_ENV !== 'production') {
        const logger = require('redux-logger').default;
        
        middleware = [...middleware, logger];
    }

    const enhancer = compose(applyMiddleware(...middleware));

    return createStore(rootReducer, initialState!, enhancer);
}

const store = configureStore();

export default store;
