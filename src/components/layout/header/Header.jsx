import React, { Component } from 'react';

import './Header.css';

import $ from 'jquery';

export default class Header extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isHide: false,
      focusHide: false
    };
  }

  onClickBtn = () => {
    this.setState({
      focusHide: true,
      isHide: !this.state.isHide
    });
  }

  render() {
    return (
      <div className="wrapper-header">
        <div className={`Header animated duration-400
          ${!this.state.focusHide ? '' : `${this.state.isHide ? 'slideOutUp' : 'slideInDown'}`}`}
        >
          Header
        </div>
        <button type="button" className="btn btn-primary" onClick={this.onClickBtn}>
          {this.state.isHide ? 'Show Header' : 'Hide Header'}
        </button>
      </div>
    );
  }
}
