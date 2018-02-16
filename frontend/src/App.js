import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import Reboot from 'material-ui/Reboot';

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
