import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {

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
      <div className="wrapper-footer">
        <div className={`Footer animated duration-400
          ${!this.state.focusHide ? '' : `${this.state.isHide ? 'slideOutDown' : 'slideInUp'}`}`}
        >
          Footer
        </div>
        <button type="button" className="btn btn-primary" onClick={this.onClickBtn}>
          {this.state.isHide ? 'Show Footer' : 'Hide Footer'}
        </button>
      </div>
    );
  }
}
