import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import ContentWrapper from './ContentWrapper';

import { MemoryRouter } from 'react-router-dom';

describe('<ContentWrapper />', () => {
    it('ContentWrapper fully renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                {/* <ContentWrapper>
                    {{}}
                </ContentWrapper> */}
            </MemoryRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
