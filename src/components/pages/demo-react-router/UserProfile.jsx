import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  match: PropTypes.object.isRequired
};

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.userID = this.props.match.params.userID;
    document.title = `User ${this.userID}`;
  }

  render() {
    return (
      <div>
        Hello {this.userID},
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;

export default UserProfile;
