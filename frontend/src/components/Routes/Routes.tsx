import * as React from 'react';
import MediaQuery from 'react-responsive';

import './Routes.css';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Company from '../Company/Company';
import About from '../About/About';
import Resources from '../Resources/Resources';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const routes = (
    <div>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/company/:name" component={Company} />
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
    </div>
);

export default function Routes(): JSX.Element {
    return (
      <div>
          <Router>
            <div>
                <MediaQuery maxWidth={1500}>
                    <Navbar/>
                </MediaQuery>
                <Sidebar content={routes}/> 
            </div>
          </Router>
      </div>
    );
}
