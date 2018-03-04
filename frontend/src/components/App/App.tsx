import * as React from 'react';
import './App.css';

import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Company from '../Company/Company';
import About from '../About/About';
import Resources from '../Resources/Resources';

import Reboot from 'material-ui/Reboot';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
          <Reboot/>
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

export default App;
