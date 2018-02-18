import React from 'react';
import ReactDOM from 'react-dom';
import Company from './Company';

import { expect }  from 'chai';
import { shallow } from 'enzyme';

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

    it('renders props name correctly', () => {
        const wrapper = shallow(<Company {...props} />);
        expect(wrapper.contains(<div>{ props.match.params.name }</div>)).to.equal(true);
    });
});