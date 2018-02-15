import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from './../../../actions';

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import moment from 'moment';


class ModalEditTodo extends Component {

  constructor(props) {
    super(props);

    this.processOptions = [];
    for (let i = 0; i < 101; i++) this.processOptions.push({
      value: `${i}`, label: `${i}%`
    });

    this.durationOptions = [];
    for (let i = 1; i < 900; i++) this.durationOptions.push({
      value: `${i}`, label: i + (i == 1 ? ' day' : ' days')
    });

    this.state = {
      process: 0,
      content: '',
      duration: 0,
      dateStart: moment(),
      dateEnd: moment()
    };

    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleChangeProcess = this.handleChangeProcess.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleChangeDateStart = this.handleChangeDateStart.bind(this);
    this.handleChangeDateEnd = this.handleChangeDateEnd.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancle = this.onCancle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;

    const process = data.process && this.processOptions.filter(o => o.value == data.process)[0];
    const duration = data.duration && this.durationOptions.filter(o => o.value == data.duration)[0];

    this.setState({
      process,
      duration,
      content: data.content,
      dateStart: moment(data.dateStart || new Date()),
      dateEnd: moment(data.dateEnd || new Date())
    });
  }

  onSave() {
    const res = window.confirm('Do you want to save with your edition?');
    if (res) {
      const newTodo = {
        content: this.state.content,
        process: parseInt(this.state.process.value, 10),
        duration: parseInt(this.state.duration.value, 10),
        dateStart: this.state.dateStart.toDate(),
        dateEnd: this.state.dateEnd.toDate()
      };
      // console.log(newTodo);
      this.props.modifyTodo(this.props.data.id, newTodo);
      this.props.toggle();
    }
  }

  onCancle() {
    const res = window.confirm('Do you want to close without saving your edtion?');
    if (res) {
      this.props.toggle();
    }
  }

  handleChangeContent(event) {
    this.setState({ content: event.target.value });
  }

  handleChangeProcess(process) {
    this.setState({ process });
  }

  syncDurationAfterSetDate() {
    console.log('syncDurationAfterSetDate');
    const diff = this.state.dateEnd.diff(this.state.dateStart);
    // console.log(diff);
    const days = moment.duration(diff).asDays();
    // console.log(days);
    const duration = this.durationOptions.filter(o => o.value == days)[0];
    // console.log(duration);
    this.setState({ duration });
  }

  handleChangeDuration(duration) {
    console.log('handleChangeDuration');
    const days = duration.value;
    const dateEnd = this.state.dateStart.clone();
    dateEnd.add(days, 'days');
    console.log(dateEnd);
    this.setState({ dateEnd }, () => this.syncDurationAfterSetDate());
  }

  handleChangeDateStart(dateStart) {
    console.log('handleChangeDateStart');
    this.setState({ dateStart }, () => this.syncDurationAfterSetDate());
  }

  handleChangeDateEnd(dateEnd) {
    console.log('handleChangeDa(teEnd');
    this.setState({ dateEnd }, () => this.syncDurationAfterSetDate());
  }

  renderFormEdit() {
    return (
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="data-id">ID</label>
          <div className="col-sm-10">
            <input id="data-id" type="text" className="form-control" defaultValue={this.props.data.id} disabled />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="data-content">Content</label>
          <div className="col-sm-10">
            <input
              id="data-content" type="text" className="form-control"
              defaultValue={this.state.content}
              onChange={this.handleChangeContent}
            />
          </div>
        </div>

        <hr />

        <div className="form-group row">

          <div className="col-6">
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Start</label>
              <div className="col-sm-8">
                <DatePicker
                  className="form-control"
                  selected={this.state.dateStart}
                  selectsStart
                  startDate={this.state.dateStart}
                  endDate={this.state.dateEnd}
                  onChange={this.handleChangeDateStart}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-form-label">End</label>
              <div className="col-sm-8">
                <DatePicker
                  className="form-control"
                  selected={this.state.dateEnd}
                  selectsEnd
                  startDate={this.state.dateStart}
                  endDate={this.state.dateEnd}
                  onChange={this.handleChangeDateEnd}
                />
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">Duration</label>
              <div className="col-sm-8">
                <Select
                  value={this.state.duration}
                  onChange={this.handleChangeDuration}
                  options={this.durationOptions}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-form-label" htmlFor="data-process">Status</label>
              <div className="col-sm-8">
                <Select
                  value={this.state.process}
                  onChange={this.handleChangeProcess}
                  options={this.processOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </form >
    );
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader toggle={this.props.toggle}>Edit Todo</ModalHeader>
        <ModalBody>
          {this.renderFormEdit()}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.onSave}>Save</Button>{' '}
          <Button color="secondary" onClick={this.onCancle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

ModalEditTodo.propTypes = {
  data: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func,
  modifyTodo: PropTypes.func.isRequired
};

ModalEditTodo.defaultProps = {
  data: {},
  toggle: () => { }
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  modifyTodo: (id, newTodo) => dispatch(Actions.modifyTodo(id, newTodo))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditTodo);
