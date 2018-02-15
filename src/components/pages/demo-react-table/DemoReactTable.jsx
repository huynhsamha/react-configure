import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from './../../../actions';

import { FormattedDate, FormattedRelative, FormattedPlural } from 'react-intl';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import matchSorter from 'match-sorter';

import ModalEditTodo from './ModalEditTodo';

import './style.css';

const propTypes = {
  todos: PropTypes.array,
  removeTodo: PropTypes.func.isRequired
};

const defaultProps = {
  todos: []
};


class DemoReactTable extends Component {

  constructor(props) {
    super(props);

    document.title = 'Demo react-table';

    this.state = {
      modalIsOpen: false,
      modalData: {}
    };

    this.toggleModalEdit = this.toggleModalEdit.bind(this);

    console.log(this.props.todos);
  }

  onClickRemoveTodo(rowInfo) {
    console.log(rowInfo);
    const data = rowInfo.row;
    const res = window.confirm(`Do you want to remove todo ${data.id}`);
    if (res) {
      this.props.removeTodo(data.id);
    }
  }

  onClickEditTodo(rowInfo) {
    // console.log(rowInfo);
    const data = rowInfo.row;
    this.toggleModalEdit(data);
  }

  toggleModalEdit(data) {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      modalData: data
    });
  }


  renderModal() {
    return (
      <ModalEditTodo
        isOpen={this.state.modalIsOpen}
        toggle={this.toggleModalEdit}
        data={this.state.modalData}
      />
    );
  }

  render() {

    const { todos } = this.props;

    const columns = [
      {
        Header: props => <span className="tb-header">ID</span>,
        accessor: 'id',
        minWidth: 80,
        filterAll: true,
        id: 'id',
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['id'] })
      },
      {
        Header: props => <span className="tb-header">Content</span>,
        accessor: 'content',
        minWidth: 100,
        filterAll: true,
        id: 'content',
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['content'] })
      },
      {
        Header: props => <span className="tb-header">Duration</span>,
        accessor: 'duration',
        maxWidth: 85,
        resizable: false,
        Cell: props => (
          <div className="tb-cell text-center">
            {props.value} <FormattedPlural value={props.value} one="day" other="days" />
          </div>
        ),
        filterAll: true,
        id: 'duration',
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['duration'] })
      },
      {
        Header: props => <span className="tb-header">Date Start</span>,
        accessor: 'dateStart',
        minWidth: 100,
        Cell: props => (
          <div className="tb-cell text-right">
            <FormattedDate value={props.value} year="numeric" month="long" day="2-digit" />
          </div>
        )
      },
      {
        Header: props => <span className="tb-header">Date End</span>,
        accessor: 'dateEnd',
        minWidth: 100,
        Cell: props => (
          <div className="tb-cell text-right">
            <FormattedDate value={props.value} year="numeric" month="long" day="2-digit" />
          </div>
        )
      },
      {
        Header: props => <span className="tb-header">Status</span>,
        accessor: 'process',
        width: 150,
        Cell: props => (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#dadada',
              borderRadius: '2px'
            }}
          >
            <div
              style={{
                width: `${props.value}%`,
                height: '100%',
                backgroundColor: props.value > 66 ? '#85cc00'
                  : props.value > 33 ? '#ffbf00' : '#ff2e00',
                borderRadius: '2px',
                transition: 'all .2s ease-out',
                textAlign: 'center',
                color: '#fff',
                fontWeight: 900,
                fontSize: 12,
                display: 'table'
              }}
            >
              {props.value}%
            </div>
          </div>
        ),
        Filter: ({ filter, onChange }) => (
          <select
            onBlur={() => { }}
            onChange={event => onChange(event.target.value)}
            style={{ width: '100%' }}
            value={filter ? filter.value : 'all'}
          >
            <option value="all">Show All</option>
            <option value="100">Done</option>
            <option value="67-99">Positive</option>
            <option value="34-66">Doing</option>
            <option value="1-33">Slow</option>
            <option value="0">Plan</option>
          </select>
        ),
        filterMethod: (filter, row) => {
          const data = row[filter.id];
          switch (filter.value) {
            case 'all': return true;
            case '100': return data == 100;
            case '67-99': return data > 66 && data < 100;
            case '34-66': return data > 33 && data < 67;
            case '1-33': return data > 0 && data < 34;
            case '0': return data == 0;
            default: return false;
          }
        }
      },
      {
        Header: '',
        width: 30,
        filterable: false,
        sortable: false,
        resizable: false,
        id: 'btn-edit',
        Cell: props => (
          <div className="tb-cell text-center tb-buttons">
            <span className="tb-button text-center cursorPointer text-success" role="button" tabIndex={0}>
              <i className="fa fa-pencil-square-o" />
            </span>
          </div>
        )
      },
      {
        Header: '',
        width: 30,
        filterable: false,
        sortable: false,
        resizable: false,
        id: 'btn-remove',
        Cell: props => (
          <div className="tb-cell text-center tb-buttons">
            <span className="tb-button text-center cursorPointer text-danger" role="button" tabIndex={0}>
              <i className="fa fa-trash-o" />
            </span>
          </div>
        )
      }
    ];

    return (
      <div className="ReactTable">
        <h3 className="text-center">Todos List</h3>
        <ReactTable
          data={todos}
          columns={columns}
          pageSizeOptions={[5, 10, 20, 25, 50, 100, 150, 200, 500]}
          defaultPageSize={10}
          filterable
          defaultFilterMethod={(filter, row) => {
            const id = filter.pivotId || filter.id;
            if (row[id] === undefined) return true;
            const data = String(row[id]).toLowerCase().trim();
            const text = String(filter.value).toLowerCase().trim();
            return data.includes(text);
          }}
          noDataText="No anything found"
          className="-striped -highlight react-table"
          getTdProps={(state, rowInfo, column) => ({
            onClick: (e) => {
              console.log(state);
              console.log(column);
              console.log(rowInfo);
              switch (column.id) {
                case 'btn-remove': return this.onClickRemoveTodo(rowInfo);
                case 'btn-edit': return this.onClickEditTodo(rowInfo);
              }
            }
          })}
        />

        {this.renderModal()}
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
  removeTodo: id => dispatch(Actions.removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoReactTable);
