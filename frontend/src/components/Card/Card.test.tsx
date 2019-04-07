import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Tile from './Card';

import { BrowserRouter as Router } from 'react-router-dom';

interface Props {
    name: string;
}

describe('<Card />', () => {
    let props: Props;

    beforeEach(() => {
        props = {
            name: 'test'
        };
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <Tile {...props} />
            </Router>,
        div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
