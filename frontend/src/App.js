import React, {Component} from 'react';
import './App.css';

import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';

import Reboot from 'material-ui/es/Reboot/Reboot';
import Grid from 'material-ui/es/Grid/Grid';

class App extends Component {
    render() {
        return (
            <div>
                <Reboot/>
                <Navbar/>
                <div className="offset">
                    <Home/>
                </div>
            </div>
        );
    }
}

export default App;
