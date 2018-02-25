import React from 'react';
import ReactDOM from 'react-dom';
import Resources from './Resources';

import { expect }  from 'chai';
import { shallow } from 'enzyme';

describe('<Resources />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Resources />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});