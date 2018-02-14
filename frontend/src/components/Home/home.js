import React, { Component } from 'react';
import './home.css';

import Header from '../Header/header';
import Tile from '../Tile/tile';

import Grid from 'material-ui/es/Grid/Grid';

const t = <div className="Home">
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />

    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />

    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />

    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />

    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />

    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
    <Tile name={'Sam'} />
    <Tile name={'Andrew'} />
    <Tile name={'Beth'} />
</div>;

class Home extends Component {
    render() {
        return (
            <div className="Home-grid">
                <Header/>
                {t}
            </div>
        );
    }
}

export default Home;
