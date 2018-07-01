import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App/App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
