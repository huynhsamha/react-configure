import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from './../../../actions';

class UserList extends Component {

  constructor(props) {
    super(props);

    document.title = 'User List';
  }

  handleClickRemoveUser(user) {
    const res = window.confirm(`Do you want to remove ${user.name}`);
    if (res) {
      this.props.removeUser(user.id);
    }
  }

  render() {


    return (
      <div>
        <table className="table table-sm table-striped table-bordered">
          <thead className="bg-primary text-white">
            <tr>
              <th className="text-center" width="5%">#</th>
              <th className="text-center" width="5%">ID</th>
              <th className="text-center" width="30%">Email</th>
              <th className="text-center" width="20%">Name</th>
              <th className="text-center" width="20%">Address</th>
              <th className="text-center" width="10%">Salary ($)</th>
              <th className="text-center" width="10%" colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userList.map((o, i) => (
              <tr key={o.id}>
                <th className="text-center" scope="row">{i}</th>
                <td className="text-center">{o.id}</td>
                <td>{o.email}</td>
                <td>{o.name}</td>
                <td>{o.address}</td>
                <td className="text-right">{o.salary}</td>
                <td className="text-center">
                  <Link to={`/user/${o.id}`}>
                    <span><i className="fa fa-edit text-primary" /></span>
                  </Link>
                </td>
                <td className="text-center">
                  <span
                    onClick={() => { this.handleClickRemoveUser(o); }}
                    role="button" tabIndex={0} onKeyUp={() => { }}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="fa fa-trash text-danger" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

UserList.propTypes = {
  userList: PropTypes.array,
  removeUser: PropTypes.func.isRequired
};

UserList.defaultProps = {
  userList: []
};

const mapStateToProps = state => ({
  userList: state.Users
});

const mapDispatchToProps = dispatch => ({
  removeUser: (userID) => {
    dispatch(Actions.removeUser(userID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
