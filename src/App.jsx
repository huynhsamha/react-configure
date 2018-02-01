import React, { Component } from 'react';
import './App.css';

import { DemoJqueryBootstrap } from './components/demo-jquery-bootstrap/demo-jquery-bootstrap';
import { LoadableDemoComponent } from './components/demo-loadable-component/loadable-demo-component';
import { DemoRouter } from './components/demo-router/demo-router';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {/* <DemoJqueryBootstrap/> */}
        {/* <LoadableDemoComponent /> */}
        {/* <DemoRouter /> */}
      </div>
    );
  }
}

export default App;
