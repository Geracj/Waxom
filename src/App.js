import React, { Component } from 'react';
import './styles/App.scss'

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Features from './components/Features'
import Blog from './components/Blog'
import Pricing from './components/Pricing'
import Shortcode from './components/Shortcode'
import Brands from './components/Brands'
import Contacts from './components/Contacts'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>
          <Home />
          <Navigation />
          <About />
          <Portfolio />
          <Features />
          <Blog />
          <Pricing />
          <Shortcode />
          <Brands />
          <Contacts />
        </h1>
      </div>
    );
  }
}

export default App;
