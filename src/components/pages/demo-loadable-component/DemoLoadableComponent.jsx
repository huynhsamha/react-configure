import React, { Component } from 'react';

export default class DemoLoadableComponent extends Component {
  constructor(props) {
    super(props);

    document.title = 'Loadable Component';
  }

  render() {
    return (
      <div>Loadable Component</div>
    );
  }
}
