import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

// import Header from '../Header/Header';
import SearchBar from 'material-ui-search-bar';
import CardGrid from '../../containers/CardGridContainer';

import { TITLE } from '../../constants';

const title: string = TITLE + ' | Home';
const content: string = TITLE + ' Home page. Find your internship today!'

interface HomeState {
    filter: any;
}

class Home extends React.Component<{}, HomeState> {
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
                    <meta name="Description" content={content} />
                </Helmet>

                {/* <Header/> */}
                <div className="Search-bar">
                    <SearchBar
                        className="Search-bar-content"
                        onChange={this.handleChange}
                        aria-label="Search Bar"
                    />
                </div>
                <CardGrid filter={this.state.filter} />
            </div>
        );
    }

    private handleChange = (event: any) => {
        this.setState({ filter: event });
    }
}

export default Home;
