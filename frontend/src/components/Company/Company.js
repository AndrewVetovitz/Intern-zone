import React from 'react';
import PropTypes from 'prop-types';
import './Company.css';

function Company(props) {
    return (
        <div>{ props.match.params.name }</div>
    );
}

Company.propTypes = {
    match: PropTypes.object.isRequired
};

export default Company;
