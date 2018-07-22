import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Sidebar from './Sidebar';

import { MemoryRouter } from 'react-router-dom';

describe('<Sidebar />', () => {
    it('Sidebar fully renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                {/* <Sidebar /> */}
            </MemoryRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
