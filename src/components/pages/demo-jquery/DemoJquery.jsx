import React, { Component } from 'react';

import $ from 'jquery';

const style = {
  width: '80%',
  margin: '20px auto',
  padding: '25px'
};

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
      <div style={style}>
        <button id="btnToggle">Click to toggle image</button>
        <div id="banner">
          <img
            src="https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg"
            alt="Banner React"
            width="800px"
          />
        </div>
      </div>
    );
  }

}
