import React, { Component } from 'react';
import './Home.css';

import Header from '../Header/Header';

import data from '../../data.json';
import Tile from "../Tile/Tile";

class Home extends Component {
    constructor(){
        super();
        this.state = {
            tiles: []
        }
    }

    componentDidMount() {
        this.getTiles();
    }

    getTiles() {
        let tiles = data.map((value, index) => {
            return (
                <Tile key={ index } name={ value['name'] } />
            )
        });

        this.setState({tiles: tiles})
    }


    render() {
        return (
            <div className="Home-grid">
                <Header/>
                <div className="Home">
                    { this.state.tiles }
                </div>
            </div>
        );
    }
}

export default Home;
