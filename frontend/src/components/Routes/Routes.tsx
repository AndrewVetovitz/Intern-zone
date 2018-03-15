import * as React from 'react';

import './Routes.css';

import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Company from '../Company/Company';
import About from '../About/About';
import Resources from '../Resources/Resources';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class Routes extends React.Component {
  render(): JSX.Element {
    return (
      <div>
          <Router>
              <div>
                  <Sidebar/>
                  <div className="offset">
                      <Route exact={true} path="/" component={Home}/>
                      <Route path="/company/:name" component={Company} />
                      <Route path="/about" component={About} />
                      <Route path="/resources" component={Resources} />
                  </div>
              </div>
          </Router>
      </div>
    );
  }
}

export default Routes;
