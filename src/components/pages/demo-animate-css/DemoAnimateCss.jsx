import React, { Component } from 'react';
import PropTypes from 'prop-types';

import('./DemoAnimateCss.css');

export default class DemoAnimateCss extends Component {
  constructor(props) {
    super(props);

    document.title = 'Demo Animate.css';
  }

  render() {
    return (
      <div className="Animate-CSS">

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated duration-1000 bounceIn infinite">
              bounceIn 1.0s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated duration-2500 bounceInUp infinite">
              bounceInUp 2.5s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated duration-2900 bounceOut infinite">
              bounceOut 2.9s
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated duration-1200 fadeIn infinite">
              fadeIn 1.2s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated duration-700 fadeInUp infinite">
              fadeInUp 0.7s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated duration-2700 fadeOutDown infinite">
              fadeOutDown 2.7s
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated lightSpeedIn duration-1700 infinite">
              lightSpeedIn 1.7s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated duration-1000 rotateIn infinite">
              rotateIn 1.0s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated duration-1400 zoomIn infinite">
              zoomIn 1.4s
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated jackInTheBox duration-3000 infinite">
              jackInTheBox 3.0s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated rollIn duration-2900 infinite">
              rollIn 2.9s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated duration-1300 bounceOut infinite">
              bounceOut 1.3s
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated flash duration-2300 infinite">
              flash 2.3s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated rubberBand duration-2600 infinite">
              rubberBand 2.6s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated jello duration-2500 infinite">
              jello 2.5s
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated shake duration-2900 infinite">
            shake 2.9s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated tada duration-2600 infinite">
              tada 2.6s
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 box">
            <div className="animated wobble duration-2500 infinite">
            wobble 2.5s
            </div>
          </div>
        </div>
      </div>
    );
  }
}
