import React, { Component } from 'react';
import './App.css';

import Header from './header/Header';
import Footer from './footer/Footer';
import Body from './body/Body';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
