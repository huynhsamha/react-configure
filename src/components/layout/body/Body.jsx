import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './Body.css';

import DemoJsBsRs from './../../pages/demo-jq-bs-rs/DemoJsBsRs';
import DemoLoadableComponent from './../../pages/demo-loadable-component/LoadableDemoComponent';
import DemoReactReveal from './../../pages/demo-react-reveal/DemoReactReveal';
import DemoRedux from './../../pages/demo-redux/DemoRedux';

export default class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Router>
          <div>
            <ul>
              <li><Link to="/jq-bs-rs">Demo jQuery, Bootstrap, Reactstrap</Link></li>
              <li><Link to="/react-loadable">Demo react-loadable</Link></li>
              <li><Link to="/react-reveal">Demo react-reveal</Link></li>
              <li><Link to="/redux">Demo redux, react-redux, redux-thunk</Link></li>
              <li><Link to="/link-not-found">Go to link not found</Link></li>
            </ul>

            <Switch>
              <Route exact path="/jq-bs-rs" component={DemoJsBsRs} />
              <Route exact path="/react-loadable" component={DemoLoadableComponent} />
              <Route exact path="/react-reveal" component={DemoReactReveal} />
              <Route exact path="/redux" component={DemoRedux} />
              <Route render={() => <div>404 Page Not Found</div>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
