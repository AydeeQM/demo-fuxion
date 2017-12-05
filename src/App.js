import React, { Component } from 'react';
import logo from './logo.svg';
import Fuxion from './Carrusel'
import Footer from './footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Fuxion />
        <Footer />
      </div>
    );
  }
}

export default App;
