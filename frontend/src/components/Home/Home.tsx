import * as React from 'react';
import './Home.css';

// import Header from '../Header/Header';
import SearchBar from 'material-ui-search-bar';
import TileGrid from '../../containers/TileGridContainer';

interface State {
    filter: any;
}

class Home extends React.Component<{}, State> {
    constructor(props: object = {}) {
        super(props);
        this.state = { filter: '' } ;
    }

    handleChange(event: any) {
        this.setState({ filter: event });
    }

    render(): JSX.Element {
        return (
            <div className="Home-grid">
                {/* <Header/> */}
                <div className="Search-bar">
                    <SearchBar
                        onChange={(text) => this.handleChange(text)}
                        style={{
                            margin: '250px auto 0px auto',
                            width: '75%'
                        }}
                    />
                </div>
                <TileGrid filter={this.state.filter} />
            </div>
        );
    }

    temp(): void {
        console.log('search');
    }
}

export default Home;
