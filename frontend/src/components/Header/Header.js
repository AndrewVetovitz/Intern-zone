import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            test: 'HEADER'
        };
    }

    render() {
        return (
            <div className="Header">
                { this.state.test }
            </div>
        );
    }
}

export default Header;
