import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;
