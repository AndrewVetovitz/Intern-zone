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
        return (
            <div className="Home-grid">
                {/* <Header/> */}
                <div className="Search-bar">
                    <SearchBar
                        className="Search-bar-content"
                        onChange={this.handleChange}
                        aria-label="Search Bar"
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
