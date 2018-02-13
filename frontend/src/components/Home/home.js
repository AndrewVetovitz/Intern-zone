import React, { Component } from 'react';
import './home.css';
import Tile from "../Tile/tile";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Tile name={'Andrew'} />
                <Tile name={'Beth'} />
                <Tile name={'Sam'} />
            </div>
        );
    }
}

export default Home;
