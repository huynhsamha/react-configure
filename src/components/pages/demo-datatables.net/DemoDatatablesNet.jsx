import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedDate, FormattedRelative, FormattedPlural } from 'react-intl';

import $ from 'jquery';

import './style.css';

const propTypes = {
  todos: PropTypes.array
};

const defaultProps = {
  todos: []
};

class DemoDatatablesNet extends Component {
  constructor(props) {
    super(props);

    document.title = 'Demo datatables.net';

    console.log('contructor');

    console.log(this.props.todos);
  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  componentDidMount() {
    console.log('componentDidMount');

    $(this.$TableTodos).DataTable({
      // data: this.props.todos,
      // columns: [
      //   { title: 'ID', data: 'id', width: 10 },
      //   { title: 'Content', data: 'content', width: 30 },
      //   { title: 'Duration', data: 'duration', width: 40 },
      //   { title: 'Date Start', data: 'dateStart', width: 80 },
      //   { title: 'Date End', data: 'dateEnd', width: 80 },
      //   { title: 'Done', data: 'done', width: 10 }
      // ],

      // optional
      paging: true,
      order: true,
      lengthMenu: [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, 'All']],
      stateSave: true,
      pagingType: 'full_numbers',
      language: {
        thousands: '.',
        decimal: ',',
        lengthMenu: 'Display  _MENU_  todos per page',
        zeroRecords: 'No todos found - Please try other searching',
        infoEmpty: 'No todos available',
        infoFiltered: '(filtered from _MAX_ total todos)'
      }
    });
  }

  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps');
  // }

  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate');
  //   return false;
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount');

    // $('.data-table-wrapper')
    //   .find('table')
    //   .DataTable()
    //   .destroy(true);
  }

  // componentDidCatch() {
  //   console.log('componentDidCatch');
  // }

  render() {
    return (
      <div className="Datatables">
        <table
          ref={(val) => { this.$TableTodos = val; }}
          className="table table-responsive table-sm"
        >
          <thead className="bg-primary text-white">
            <tr>
              <th width="10%" className="">ID</th>
              <th width="30%" className="">Content</th>
              <th width="10%" className="">Duration</th>
              <th width="20%" className="">Time start</th>
              <th width="20%" className="">Time end</th>
              <th width="10%" className="">Done</th>
            </tr>
          </thead>

          <tbody>
            {this.props.todos.map(o => (
              <tr key={o.id}>
                <td className="">{o.id}</td>
                <td className="">{o.content}</td>
                <td className="text-center">
                  <FormattedPlural value={o.duration} one="day" other="days" />
                </td>
                <td className="">
                  <FormattedDate value={o.dateStart} year="numeric" month="long" day="2-digit" />
                </td>
                <td className="">
                  <FormattedDate value={o.dateEnd} year="numeric" month="long" day="2-digit" />
                </td>
                <td className="text-center">
                  {o.done ?
                    <span><i className="fa fa-fa-check-square" /></span>
                    :
                    <span><i className="fa fa-fa-minus-square" /></span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

DemoDatatablesNet.propTypes = propTypes;
DemoDatatablesNet.defaultProps = defaultProps;

const mapStateToProps = state => ({
  todos: state.Todos
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DemoDatatablesNet);
