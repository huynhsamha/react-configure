import React, { Component } from 'react';
import { LoadableHomePage } from './components/home-page/loadable-home-page';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';
import $ from 'jquery';
import { DemoRouter } from './components/demo-router/demo-router';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  onClickReceiveAlert = () => {
    this.toggle();
    alert('You are received one alert!');
  }

  render() {
    return (
      <div className="App">
        <LoadableHomePage />
        <DemoRouter />
        <div className="container">
          <div className="row">
            <div className="col-4 text-center">
              <button type="button" className="btn btn-danger" id="alert">Alert</button>
            </div>

            <div className="col-4 text-center">
              <button type="button" className="btn btn-success" id="tooltip"
                data-toggle="tooltip" data-placement="right" title="Tooltip on here">Tooltip</button>
            </div>

            <div className="col-4 text-center">
              <Button color="danger" onClick={this.toggle}>Toggle Modal</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Notification</ModalHeader>
                <ModalBody>
                  Do you want receive one alert?
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.onClickReceiveAlert}>OK</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>

      </div>
    );
  }

  componentDidMount() {
    // jQuery should declare at here
    $(document).ready(() => {
      $('#alert').click(() => alert('This is alert be jQuery'));
      // enable tooltip
      $('#tooltip').tooltip();
    });
  }

}

export default App;
