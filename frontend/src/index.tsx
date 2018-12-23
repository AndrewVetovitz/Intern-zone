import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App/App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { Provider } from 'react-redux';
import store from './store/store';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
