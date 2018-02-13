import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/*<Home/>*/}
      </div>
    );
  }
}

export default App;
