import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class UserList extends Component {

  constructor(props) {
    super(props);

    document.title = 'User List';
  }

  render() {

    const userList = [];
    for (let i = 0; i < 100; i++) {
      userList.push({
        id: i,
        name: `User ${i + 1}`,
        email: `user-${i + 1}@gmail.com`,
        salary: i * 975 + (100 - i) * 285,
        address: `Street ${100 - i}`
      });
    }

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
            {userList.map((o, i) => (
              <tr key={o.id}>
                <th className="text-center" scope="row">{i}</th>
                <td className="text-center">{o.id}</td>
                <td>{o.email}</td>
                <td>{o.name}</td>
                <td>{o.address}</td>
                <td className="text-right">{o.salary}</td>
                <td className="text-center">
                  <Link to={`/${o.id}`}>
                    <span><i className="fa fa-edit text-primary" /></span>
                  </Link>
                </td>
                <td className="text-center">
                  <Link to={`/${o.id}`}>
                    <span><i className="fa fa-trash text-danger" /></span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
