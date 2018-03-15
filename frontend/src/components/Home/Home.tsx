import * as React from 'react';
import './Home.css';

import Header from '../Header/Header';
import SearchBar from 'material-ui-search-bar';
import TileGridContainer from '../../containers/TileGridContainer';

class Home extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div className="Home-grid">
                <Header/>
                <SearchBar
                    onChange={(text) => {
                        this.setState({
                            test: text
                        });
                    }}
                    onRequestSearch={() => this.temp()}
                    style={{
                        margin: '120px auto',
                        width: '75%'
                    }}
                />
                <TileGridContainer/>
            </div>
        );
    }

    temp(): boolean {
        return true;
    }
}

export default Home;
