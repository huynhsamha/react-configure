import React, { Component } from 'react';

import $ from 'jquery';

import('./DemoJquery.css');

export default class DemoJquery extends Component {
  constructor(props) {
    super(props);

    document.title = 'Demo Jquery';
  }

  componentDidMount() {
    $('#btnToggle').click(() => {
      console.log('Toggle');
      const $banner = $('#banner');
      $banner.slideToggle();
    });
  }

  render() {
    return (
      <div className="DemoJquery">
        <button id="btnToggle" className="jq-button">Click to toggle image</button>
        <br />
        <div id="banner">
          <img
            src="https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
            alt="Banner React"
            width="100%"
          />
        </div>
      </div>
    );
  }

}
