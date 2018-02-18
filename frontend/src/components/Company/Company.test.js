import React from 'react';
import ReactDOM from 'react-dom';
import Company from './Company';

describe('<Company />', () => {
    let props = null;

    beforeEach(() => {
        props = {
            match: {
                params: {
                    name: 'Amazon'
                }
            }
        };
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Company {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});