import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import Navbar from '../Navbar/'
import headshot from '../../fisherHeadshot.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <img src={headshot} />
      </div>
    );
  }
}

export default App;
