import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActionCreator from './ActionCreator';

const propTypes = {
  displayImage: PropTypes.bool
};

const defaultProps = {
  displayImage: false
};

const style = {
  minHeight: '400px',
  width: '80%',
  margin: '20px auto',
  padding: '25px'
};

class DemoRedux extends Component {
  constructor(props) {
    super(props);

    document.title = 'Demo Redux';
  }

  render() {
    return (
      <div style={style}>

        <img
          src="https://static01.nyt.com/images/2017/07/01/sports/01NBAFREEAGENCYweb1/01NBAFREEAGENCYweb1-master768.jpg"
          alt="basketball"
          width="500"
          style={{ display: this.props.displayImage ? 'initial' : 'none' }}
        />

        <ActionCreator />

      </div>
    );
  }
}

DemoRedux.propTypes = propTypes;
DemoRedux.defaultProps = defaultProps;

const mapStateToProps = state => ({
  displayImage: state.Demo1,
  demo2: state.Demo2
});

export default connect(mapStateToProps)(DemoRedux);
