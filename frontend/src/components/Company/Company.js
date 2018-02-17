import React from 'react';
import './Company.css';
import {MemoryRouter} from "react-router-dom";

function Company(props) {
    console.log(props);
    return (
        <div>{ props.match.params.name }</div>
    )
}

export default Company;
