import React, { Component } from 'react';
import Navi from './Navi';
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import { Hashrouter as Router, Route } from 'react-router-dom';



import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <Contact />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
