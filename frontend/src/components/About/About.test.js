import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

import { expect }  from 'chai';
import { shallow } from 'enzyme';

describe('<About />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<About />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});