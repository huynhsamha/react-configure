import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import DemoJquery from './../../pages/demo-jquery/DemoJquery';
import DemoBootstrap from './../../pages/demo-bootstrap/DemoBootstrap';
import DemoReactstrap from './../../pages/demo-reactstrap/DemoReactstrap';
import DemoLoadableComponent from './../../pages/demo-loadable-component/LoadableDemoComponent';
import DemoReactRouter from './../../pages/demo-react-router/DemoReactRouter';
import DemoReactReveal from './../../pages/demo-react-reveal/DemoReactReveal';
import DemoReactScrollchor from './../../pages/demo-react-scrollchor/DemoReactScrollchor';
import DemoRedux from './../../pages/demo-redux/DemoRedux';

import('./Body.css').then().catch(err => console.log(err));

export default class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Router basename="/">
          <div className="container-fluid">
            <div className="row">
              <div className="Body-left col-lg-3 col-sm-12">
                <ul>
                  <li><Link to="/jquery">Demo Jquery</Link></li>
                  <li><Link to="/bootstrap">Demo Bootstrap</Link></li>
                  <li><Link to="/reactstrap">Demo Reactstrap</Link></li>
                  <li><Link to="/react-router">Demo React Router</Link></li>
                  <li><Link to="/react-loadable">Demo react-loadable</Link></li>
                  <li><Link to="/react-reveal">Demo react-reveal</Link></li>
                  <li><Link to="/react-scrollchor">Demo react-scrollchor</Link></li>
                  <li><Link to="/redux">Demo Redux</Link></li>
                  <li><Link to="/link-not-found">Go to link not found</Link></li>
                </ul>

              </div>

              <div className="Body-right col-lg-9 col-sm-12">
                <Switch>
                  <Route exact path="/" />
                  <Route exact path="/jquery" component={DemoJquery} />
                  <Route exact path="/bootstrap" component={DemoBootstrap} />
                  <Route exact path="/reactstrap" component={DemoReactstrap} />
                  <Route exact path="/react-loadable" component={DemoLoadableComponent} />
                  <Route path="/react-router" component={DemoReactRouter} />
                  <Route exact path="/react-reveal" component={DemoReactReveal} />
                  <Route exact path="/react-scrollchor" component={DemoReactScrollchor} />
                  <Route exact path="/redux" component={DemoRedux} />
                  <Route render={() => <div>404 Page Not Found</div>} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
