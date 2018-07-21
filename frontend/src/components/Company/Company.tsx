import * as React from 'react';
import './Company.css';

interface CompanyProps {
    match: {
        params: {
            name: string;
        }
    };
}

export default function Company({ match }: CompanyProps): JSX.Element {
    return (
        <div>{match.params.name}</div>
    );
}
