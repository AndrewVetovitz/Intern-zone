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

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import constants from '../../constants';

const routes: JSX.Element = (
    <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/company/:name" component={Company} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/resources" component={Resources} />
    </Switch>
);

export default function Routes(): JSX.Element {
    const queryWidth = constants.NAVBAR_SIDEBAR_BREAK_WIDTH;

    return (
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
    );
}
