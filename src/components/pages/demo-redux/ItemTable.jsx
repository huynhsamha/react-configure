import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import * as Actions from './../../../actions';
import { FormattedDate } from 'react-intl';

const propTypes = {
  removeItem: PropTypes.func.isRequired,
  moveItem: PropTypes.func.isRequired,
  items: PropTypes.array
};

const defaultProps = {
  items: []
};

class ItemTable extends Component {
  constructor(props) {
    super(props);

    document.title = 'Demo Redux';

    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleMoveUpItem = this.handleMoveUpItem.bind(this);
    this.handleMoveDownItem = this.handleMoveDownItem.bind(this);
  }

  handleRemoveItem(id) {
    this.props.removeItem(id);
  }

  handleMoveUpItem(id) {
    this.props.moveItem(id, true);
  }

  handleMoveDownItem(id) {
    this.props.moveItem(id, false);
  }

  render() {

    const styleBtnFA = {
      cursor: 'pointer'
    };

    return (
      <div>
        <Table striped bordered size="sm">
          <thead className="bg-success text-white">
            <tr>
              <th className="text-center" width="5%">#</th>
              <th className="text-center" width="10%">ID</th>
              <th className="text-center" width="20%">Name</th>
              <th className="text-center" width="30%">Date</th>
              <th className="text-center" width="8%">Leave</th>
              <th className="text-center" width="12%">Price</th>
              <th className="text-center" width="15%" colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((o, i) =>
              (
                <tr key={o.id}>
                  <th className="text-center" scope="row">{i}</th>
                  <th className="text-center">{o.id}</th>
                  <td style={{ paddingLeft: '15px' }}>{o.name}</td>
                  <td style={{ paddingLeft: '15px' }}>
                    <FormattedDate
                      value={o.date}
                      day="numeric"
                      month="long"
                      year="numeric"
                    />
                  </td>
                  <td style={{ paddingRight: '15px' }} className="text-right">{o.leave}</td>
                  <td style={{ paddingRight: '15px' }} className="text-right">{o.price}</td>

                  <td className="text-center">
                    <i
                      className="fa fa-chevron-circle-up text-primary"
                      onClick={() => this.handleMoveUpItem(o.id)}
                      onKeyDown={() => { }} role="button" tabIndex={0}
                      style={styleBtnFA}
                    />
                  </td>

                  <td className="text-center">
                    <i
                      className="fa fa-chevron-circle-down text-primary"
                      onClick={() => this.handleMoveDownItem(o.id)}
                      onKeyDown={() => { }} role="button" tabIndex={0}
                      style={styleBtnFA}
                    />
                  </td>

                  <td className="text-center">
                    <i
                      className="fa fa-trash-o text-danger"
                      onClick={() => this.handleRemoveItem(o.id)}
                      onKeyDown={this.onKey} role="button" tabIndex={0}
                      style={styleBtnFA}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }

}

ItemTable.propTypes = propTypes;
ItemTable.defaultProps = defaultProps;

const mapStateToProps = state => ({
  items: state.Items
});

const mapDispatchToProps = dispatch => ({
  removeItem: (id) => {
    dispatch(Actions.removeItem(id));
  },
  moveItem: (id, isUp) => {
    dispatch(Actions.moveItem(id, isUp));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemTable);
