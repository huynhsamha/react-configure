import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const propTypes = {
  match: PropTypes.object.isRequired,
  getUser: PropTypes.array.isRequired
};

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.userID = this.props.match.params.userID;

    this.user = this.props.getUser;
    console.log(this.user);

    if (this.user && this.user.length > 0) this.user = this.user[0];
    else this.user = {};

    document.title = `User ${this.user.name}`;
  }

  render() {
    return (
      <div>
        Hello {this.user.name},
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => ({
  getUser: state.Users.filter(o => o.id == ownProps.match.params.userID)
});

export default connect(mapStateToProps)(UserProfile);
