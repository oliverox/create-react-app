import React, { Component } from 'react';
import Button from './index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const handleClick = () => {
      alert('onClick prop triggered');
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Market Component Builder</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/index.js</code> and save to reload 
          the sample component rendered below.
        </p>
        <Button onClick={handleClick}>Sample Button Component</Button>
      </div>
    );
  }
}

export default App;
