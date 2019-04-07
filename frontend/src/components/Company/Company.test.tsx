import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Company, { CompanyProps } from './Company';

describe('<Company />', () => {
    let props: CompanyProps;

    const companyName: string = 'Amazon'
    const companyDescription: string = 'Amazon description';

    beforeEach(() => {
        props = {
            match: {
                params: {
                    name: companyName
                }
            },
            getCompanyByName: (name: string) => {},
            company: {
                name: companyName,
                description: companyDescription,
                postings: [],
                fetching: false,
                fetched: true,
                error: null
            }
        };
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Company {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});