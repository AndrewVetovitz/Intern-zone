import * as React from 'react';

import * as data from '../../data.json';
import Tile from '../Tile/Tile';

import './Tile.css';

export interface State {
    tiles: Object[]
}

class TileGrid extends React.Component<{}, State> {
    constructor(props: any){
        super(props);
        this.state = {
            tiles: []
        };
    }

    componentDidMount() {
        this.getTiles();
    }

    getTiles() {
        let tiles = data.map((value: string[], index: number) => {
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
