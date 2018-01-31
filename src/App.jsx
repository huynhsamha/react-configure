import React, { Component } from 'react';
import './App.css';

import $ from 'jquery';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="container">
          <div className="row">
            <div className="col-4 text-center">
              <button type="button" className="btn btn-danger" id="alert">Alert</button>
            </div>

            <div className="col-4 text-center">
              <button type="button" className="btn btn-success" id="tooltip"
                data-toggle="tooltip" data-placement="right" title="Tooltip on here">Tooltip</button>
            </div>

            <div className="col-4">
            
            </div>
          </div>
        </div>

      </div>
    );
  }

  componentDidMount() {
    // jQuery should declare at here
    $(document).ready(() => {
      $('#alert').click(() => alert('This is alert be jQuery'));
      // enable tooltip
      $('#tooltip').tooltip();
    });
  }

}

export default App;
