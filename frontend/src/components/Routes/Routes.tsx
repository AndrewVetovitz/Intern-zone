import * as React from 'react';
import MediaQuery from 'react-responsive';
import Toolbar from '@material-ui/core/Toolbar';

import Navbar from '../../containers/NavbarContainer';
import Sidebar from '../../containers/SidebarContainer';
import ContentWrapper from '../../containers/ContentWrapperContainer';

import Home from '../Home/Home';
import Company from '../Company/Company';
import About from '../About/About';
import Resources from '../Resources/Resources';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import constants from '../../constants';

const routes: JSX.Element = (
    <React.Fragment>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/company/:name" component={Company} />
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
    </React.Fragment>
);

export default function Routes(): JSX.Element {
    const queryWidth = constants.NAVBAR_SIDEBAR_BREAK_WIDTH;

    return (
      <React.Fragment>
            <Router>
                <div>
                    <MediaQuery maxWidth={queryWidth}>
                        <Navbar/>
                        <Toolbar />
                    </MediaQuery>
                    <MediaQuery minWidth={queryWidth}>
                        {(matches) => {
                            return (
                                <Sidebar windowSize={matches} />
                            );
                        }}
                    </MediaQuery>
                    <ContentWrapper>
                        {routes}
                    </ContentWrapper>
                </div>
            </Router>
      </React.Fragment>
    );
}
