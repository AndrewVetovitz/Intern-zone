import * as React from 'react';
import './Company.css';

export interface Props {
    match: {
        params: {
            name: string;
        }
    };
}

function Company({ match }: Props) {
    return (
        <div>{match.params.name}</div>
    );
}

export default Company;