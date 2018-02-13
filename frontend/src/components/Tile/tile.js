import React, { Component } from 'react';
import './tile.css';

class Tile extends Component {


    render() {
        return (
            <div className="Tile">
                { this.props.name }
            </div>
        );
    }
}

export default Tile;
