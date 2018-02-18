import React from 'react';
import './Company.css';

function Company(props) {
    return (
        <div>{ props.match.params.name }</div>
    );
}

export default Company;
