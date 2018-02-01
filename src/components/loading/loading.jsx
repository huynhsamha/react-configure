import React, { Component } from 'react';
import './loading.css';

export default class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="Loading">
                <div className="LoadingText">
                    Loading...
                </div>
            </div>
        )
    }
}