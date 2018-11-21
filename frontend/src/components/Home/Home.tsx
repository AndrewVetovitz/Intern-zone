import * as React from 'react';
import './Home.css';

// import Header from '../Header/Header';
import SearchBar from 'material-ui-search-bar';
import TileGrid from '../../containers/TileGridContainer';

interface State {
    filter: any;
}

class Home extends React.Component<{}, State> {
    constructor(props: object) {
        super(props);
        this.state = { filter: '' };
    }

    render(): JSX.Element {
        const searchBarStyles: React.CSSProperties = {margin: '250px auto 0px auto', width: '75%'};
    
        return (
            <div className="Home-grid">
                {/* <Header/> */}
                <div className="Search-bar">
                    <SearchBar
                        aria-label="Search Bar"
                        onChange={this.handleChange}
                        style={searchBarStyles}
                    />
                </div>
                <TileGrid filter={this.state.filter} />
            </div>
        );
    }

    private handleChange = (event: any) => {
        this.setState({ filter: event });
    }
}

export default Home;
