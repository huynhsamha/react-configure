import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemTable from './ItemTable';
import FormAddItem from './FormAddItem';

export default class DemoRedux extends Component {
  constructor(props) {
    super(props);

    document.title = 'Demo Redux';
  }

  render() {
    return (
      <div>
        <FormAddItem />
        <ItemTable />
      </div>
    );
  }
}
