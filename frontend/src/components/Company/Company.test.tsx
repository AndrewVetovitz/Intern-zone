import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Company, { Props } from './Company';

import { expect }  from 'chai';
import { shallow } from 'enzyme';

describe('<Company />', () => {
    let props: Props;

    beforeEach(() => {
        props = {
            match: {
                params: {
                    name: 'Amazon'
                }
            },
            postings: [
                {
                    positionName: 'test',
                    location: 'test',
                    link: 'test'
                }
            ],
            description: 'test'
        };
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Company {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders props name correctly', () => {
        const wrapper = shallow(<Company {...props} />);
        expect(wrapper.contains(<div>{props.match.params.name}</div>)).to.equal(true);
    });
});