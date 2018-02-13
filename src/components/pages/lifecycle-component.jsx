import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LifeCycleComponent extends Component {

  constructor(props) {
    super(props);

    document.title = 'Life Cycle Component';

    console.log('contructor');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h3>
          This is demo Life Cycle of React Component
        </h3>
        <br />
        <p className="text-center">View Console from Browser to view life cycle component</p>
      </div>
    );
  }
}
