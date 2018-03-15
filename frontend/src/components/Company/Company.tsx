import * as React from 'react';
import './Company.css';

interface Props {
    match: {
        params: {
            name: string;
        }
    };
}

function Company({ match }: Props): JSX.Element {
    return (
        <div>{match.params.name}</div>
    );
}

export default Company;
