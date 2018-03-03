import * as React from 'react';

import data from '../../data.json';
import Tile from '../Tile/Tile';

import './Tile.css';

export interface State {
    tiles: object[];
}

class TileGrid extends React.Component<{}, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            tiles: []
        };
    }

    componentDidMount() {
        this.getTiles();
    }

    getTiles() {
        const name = 'name';

        let tiles = data.map((value: string[], index: number) => {
            return (
                <div className="Tile" key={index}>
                    <Tile name={value[name]} />
                </div>
            );
        });

        this.setState({tiles: tiles});
    }

    render() {
        return (
            <div className="Tile-Grid">
                {this.state.tiles}
            </div>
        );
    }
}

export default TileGrid;
