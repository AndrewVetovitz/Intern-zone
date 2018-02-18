import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from "react-router-dom";

describe('<Navbar />', () => {
    it('Navbar fully renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});



