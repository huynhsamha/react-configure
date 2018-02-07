import React, { Component } from 'react';

import $ from 'jquery';
import 'bootstrap';

export default class DemoBootstrap extends Component {
  constructor(props) {
    super(props);

    document.title = 'Demo Bootstrap';
    this.onClickReceviceAlert = this.onClickReceviceAlert.bind(this);
  }

  componentDidMount() {
    $('#btnToggle').tooltip();
  }

  onClickReceviceAlert() {
    alert('This is alert');
    $('#exampleModal').modal('hide');
  }

  render() {
    return (
      <div className="col-8 offset-2">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-tooltip="tooltip"
          data-placement="top"
          title="Click to open modal"
          id="btnToggle"
        >
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Do you want to get an alert
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dimiss="modal" onClick={this.onClickReceviceAlert}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
