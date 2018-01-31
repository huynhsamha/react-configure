import React, { Component } from 'react';
import './App.css';

import $ from 'jquery';

class App extends Component {

  render() {
    return (
      <div className="App">
        <button id="alert">Alert</button>
      </div>
    );
  }

  componentDidMount() {
    // jQuery should declare at here
    $(document).ready(() => {
      $('#alert').click(() => alert('This is alert be jQuery'));
    });
  }

}

export default App;
