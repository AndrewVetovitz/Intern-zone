import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';

import { Provider } from 'react-redux';
import store from '../../store';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Home />
            </Router>
        </Provider>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
