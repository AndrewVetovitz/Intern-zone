import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Tile from './Tile';

describe('<Tile />', () => {
    let props: any = null;

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
