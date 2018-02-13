import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedDate, FormattedRelative, FormattedPlural } from 'react-intl';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import './style.css';

const propTypes = {
  todos: PropTypes.array
};

const defaultProps = {
  todos: []
};

class DemoReactTable extends Component {
  constructor(props) {
    super(props);

    document.title = 'Demo react-table';

    console.log('contructor');

    console.log(this.props.todos);
  }

  render() {
    const columns2 = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className="number">{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }];

    const columns = [
      {
        Header: props => <span className="tb-header">ID</span>,
        accessor: 'id'
      },
      {
        Header: props => <span className="tb-header">Content</span>,
        accessor: 'content'
      },
      {
        Header: props => <span className="tb-header">Duration</span>,
        accessor: 'duration',
        Cell: props => (
          <div className="tb-cell text-center">
            {props.value} <FormattedPlural value={props.value} one="day" other="days" />
          </div>
        )
      },
      {
        Header: props => <span className="tb-header">Date Start</span>,
        accessor: 'dateStart',
        Cell: props => (
          <div className="tb-cell text-right">
            <FormattedDate value={props.value} year="numeric" month="long" day="2-digit" />
          </div>
        )
      },
      {
        Header: props => <span className="tb-header">Date End</span>,
        accessor: 'dateEnd',
        Cell: props => (
          <div className="tb-cell text-right">
            <FormattedDate value={props.value} year="numeric" month="long" day="2-digit" />
          </div>
        )
      },
      {
        Header: props => <span className="tb-header">Done</span>,
        accessor: 'done',
        Cell: props => (
          <div className="text-center">
            {props.value ?
              <i className="fa fa-check-square text-success" />
              :
              <i className="fa fa-minus-square text-danger" />
            }
          </div>
        )
      }
    ];

    return (
      <div className="ReactTable">
        <ReactTable
          data={this.props.todos}
          columns={columns}
        />
      </div>
    );
  }
}

DemoReactTable.propTypes = propTypes;
DemoReactTable.defaultProps = defaultProps;

const mapStateToProps = state => ({
  todos: state.Todos
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DemoReactTable);
