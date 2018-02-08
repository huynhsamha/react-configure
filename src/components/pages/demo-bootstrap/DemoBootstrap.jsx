import React, { Component } from 'react';

import $ from 'jquery';
import 'bootstrap';
/**
 * import 'bootstrap'; is unnecessary
 * If import, we can see method Bootstrap from $ variable
 * such as: $('#modalAlert').modal('hide');
 * We still use this method if not import.
 */

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
    $('#modalAlert').modal('hide');
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modalAlert"
          data-tooltip="tooltip"
          data-placement="right"
          title="Click to open modal"
          id="btnToggle"
        >
          Launch demo modal
        </button>

        <div className="modal fade" id="modalAlert" tabIndex="-1" role="dialog" aria-labelledby="modalAlertLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalAlertLabel">Warning</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Do you want to get an alert?
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
