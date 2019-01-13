import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Tile from './Card';

interface Props {
    name: string;
}

describe('<Tile />', () => {
    let props: Props;

    beforeEach(() => {
        props = {
            name: 'test'
        };
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tile {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
