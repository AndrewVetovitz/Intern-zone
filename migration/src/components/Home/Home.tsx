import * as React from 'react';
import './Home.css';

import Header from '../Header/Header';
import SearchBar from 'material-ui-search-bar';
import TileGrid from '../Tile/TileGrid';

class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div className="Home-grid">
                <Header/>
                <SearchBar
                    onChange={(text) => {
                        this.setState({
                            test: text
                        });
                    }}
                    onRequestSearch={() => temp()}
                    style={{
                        margin: '120px auto',
                        width: '75%'
                    }}
                />
                <TileGrid/>
            </div>
        );
    }
}

export default Home;

function temp() {
    return true;
}