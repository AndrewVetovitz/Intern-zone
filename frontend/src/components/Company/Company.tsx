import * as React from 'react';
import './Company.css';

interface Props {
    match: {
        params: {
            name: string;
        }
    };
}

export default function Company({ match }: Props): JSX.Element {
    return (
        <div>{match.params.name}</div>
    );
}
