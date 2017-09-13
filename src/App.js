import React, { Component } from 'react';
import MainArea from './MainArea.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MyPortfolio</h2>
        </div>
        <div>
          <p className="App-intro">
            Landing page will be here. Grid of projects maybe?
          </p>
          <MainArea />
        </div>
      </div>
    );
  }
}

export default App;
