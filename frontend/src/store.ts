import  { applyMiddleware, createStore } from 'redux';

import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import reducer from './reducers';

const middleWare = applyMiddleware(promise(), logger);

export default createStore(reducer, middleWare);
