import * as React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

// import Header from '../Header/Header';
import SearchBar from 'material-ui-search-bar';
import TileGrid from '../../containers/TileGridContainer';

import constants from '../../constants';

const title: string = constants.TITLE + ' | Home';

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
                <Helmet defer={false}>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="Description" content="Intern-Zone Home page"></meta>
                </Helmet>

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
