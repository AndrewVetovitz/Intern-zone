import React, { Component } from 'react';
import './Header.css';

import SearchBar from 'material-ui-search-bar'

class Header extends Component {
    constructor(){
        super();
        this.state = {
            test: "HEADER"
        };
    }

    render() {
        return (
            <div className="Header">
                { this.state.test }
                <SearchBar
                    onChange={(text) => {
                        this.setState({
                            test: text
                        })
                    }}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    style={{
                        margin: '120px auto',
                        width: '75%',
                    }}
                />
            </div>
        );
    }
}

export default Header;
