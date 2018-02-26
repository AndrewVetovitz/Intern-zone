import React, { Component } from 'react';

import data from '../../data.json';
import Tile from '../Tile/Tile';

import './Tile.css';

class TileGrid extends Component {
    constructor(){
        super();
        this.state = {
            tiles: []
        };
    }

    componentDidMount() {
        this.getTiles();
    }

    getTiles() {
        let tiles = data.map((value, index) => {
            return (
                <div className="Tile" key={ index }>
                    <Tile name={ value['name'] } />
                </div>
            );
        });

        this.setState({tiles: tiles});
    }

    render() {
        return (
            <div className="Tile-Grid">
                { this.state.tiles }
            </div>
        );
    }
}

export default TileGrid;
