import React, { Component } from 'react';
import {connect} from 'react-redux';
import ActionRedux from './action';

const style = {
    backgroundColor: '#9fadec',
    minHeight: '400px',
    width: '80%',
    margin: '20px auto',
    padding: '25px'
}

export class DemoRedux extends Component {
    constructor(props) {
        super(props);

        document.title = 'Demo Redux';
    }

    render() {
        return (
            <div style={style}>
                <ActionRedux/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        demo1: state.Demo1,
        demo2: state.Demo2
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);