import * as React from 'react';
import './Company.css';

export interface Props {
    match: any;
}

function Company({ match }: Props) {
    return (
        <div>{ match.params.name }</div>
    );
}

export default Company;
