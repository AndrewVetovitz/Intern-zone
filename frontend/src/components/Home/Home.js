import React, { Component } from 'react';
import './Home.css';

import Header from '../Header/Header';
import TileGrid from '../Tile/TileGrid';

class Home extends Component {
    render() {
        return (
            <div className="Home-grid">
                <Header/>
                <TileGrid/>
            </div>
        );
    }
}

export default Home;
