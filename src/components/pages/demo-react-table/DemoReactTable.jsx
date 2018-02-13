import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedDate, FormattedRelative, FormattedPlural } from 'react-intl';

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
    return (
      <div className="ReactTable">
        {/* <table
          ref={(val) => { this.$TableTodos = val; }}
          className="table table-responsive table-sm table-bordered"
        >
          <thead className="">
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
        </table> */}
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
