import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Child } from './child';
import * as Actions from './../../actions';

export class ActionRedux extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.onClickToggleImage}>Toggle Image</button>
                <Child/>
            </div>
        )
    }

    onClickToggleImage = () => {
        this.props.toggleImage();
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleImage: () => {
            dispatch(Actions.toggleDemo1());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionRedux);