import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DemoComponent from '../index';
import logo from './logo.svg';
import './demo.css';

class Demo extends Component {
  render() {
    const handleClick = () => {
      alert('onClick prop triggered');
    }
    return (
      <div className="demo">
        <div className="demo-header">
          <img src={logo} className="demo-logo" alt="logo" />
          <span className="demo-title">Component Demo</span>
        </div>
        <DemoComponent onClick={handleClick}>Sample Demo Component</DemoComponent>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
);
