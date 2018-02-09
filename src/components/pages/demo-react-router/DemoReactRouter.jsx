import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoadableImage from './LoadableImage';
import Text from './Text';
import UserList from './UserList';
import UserProfile from './UserProfile';

const propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

class DemoReactRouter extends Component {
  constructor(props) {
    super(props);

    document.title = 'Demo React Router';

    console.log(this.props.location);
    console.log(this.props.match);
    // example:
    // {pathname: "/4", search: "", hash: "", state: undefined, key: "6hvrlm"}
    // {path: "/:userID", url: "/4", isExact: true, params: {userID: 4}}
  }

  render() {
    return (
      <div>
        <Router basename={`${process.env.PUBLIC_URL}/react-router`}>
          <div className="container-fluid">
            <ul>
              <li><Link to="/loadable-image">Loadable Image</Link></li>
              <li><Link to="/unloadable-text">Unloadable Text</Link></li>
              <li><Link to="/user-list">User List</Link></li>
              <li><Link to="/link-not-found">Go to link not found</Link></li>
            </ul>

            <Switch>
              <Route exact path="/loadable-image" component={LoadableImage} />
              <Route exact path="/unloadable-text" component={Text} />
              <Route exact path="/user-list" component={UserList} />
              <Route exact path="/user/:userID" component={UserProfile} />
              <Route render={() => <div>404 Page Not Found</div>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

DemoReactRouter.propTypes = propTypes;

export default DemoReactRouter;
