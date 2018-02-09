import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from './../../../actions';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const propTypes = {
  addItem: PropTypes.func.isRequired
};

class FormAddItem extends Component {
  constructor(props) {
    super(props);

    this.item = {
      name: null, leave: null, price: null
    };

    this.onClickAddItem = this.onClickAddItem.bind(this);
  }

  onClickAddItem() {
    // create new item, not pass one object is this.item (as redux)
    const newItem = { ...this.item };
    this.props.addItem(newItem);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
            <Col sm={10}>
              <Input
                type="email"
                name="name"
                id="name"
                placeholder="Item name"
                onChange={(e) => { this.item.name = e.target.value; }}
              />
            </Col>
          </FormGroup>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <FormGroup row>
            <Label for="leave" sm={3}>Leave</Label>
            <Col sm={9}>
              <Input
                type="number"
                name="leave"
                id="leave"
                placeholder="Leave"
                onChange={(e) => { this.item.leave = e.target.value; }}
              />
            </Col>
          </FormGroup>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <FormGroup row>
            <Label for="price" sm={3}>Price</Label>
            <Col sm={9}>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                onChange={(e) => { this.item.price = e.target.value; }}
              />
            </Col>
          </FormGroup>
        </div>

        <div className="col-lg-2 col-md-6 col-sm-12">
          <FormGroup check row>
            <Col >
              <Button color="success" onClick={this.onClickAddItem}>Add</Button>
            </Col>
          </FormGroup>
        </div>
      </div>
    );
  }
}

FormAddItem.propTypes = propTypes;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addItem: (item) => {
    dispatch(Actions.addItem(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAddItem);
