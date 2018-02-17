import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<Navbar />', () => {
    it('Navbar fully renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Navbar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders', () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.contains()).to.equal(true);
    });
});



