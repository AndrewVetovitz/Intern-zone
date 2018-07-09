import * as React from 'react';
import MediaQuery from 'react-responsive';
import Navbar from '../Navbar/Navbar';
import Toolbar from '@material-ui/core/Toolbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Company from '../Company/Company';
import About from '../About/About';
import Resources from '../Resources/Resources';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const routes: JSX.Element = (
    <div>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/company/:name" component={Company} />
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
    </div>
);

export default function Routes(): JSX.Element {
    return (
      <React.Fragment>
          <Router>
            <div>
                <MediaQuery maxWidth={1500}>
                    <Navbar/>
                    <Toolbar />
                </MediaQuery>
                <Sidebar>
                    {routes}
                </Sidebar>
            </div>
          </Router>
      </React.Fragment>
    );
}
