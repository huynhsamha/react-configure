import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { LoadableLink1 } from './link-1/loadable-link-1';
import { LoadableLink2 } from './link-2/loadable-link-2';
import { LoadableLink3 } from './link-3/loadable-link-3';

const DemoRouterStyle = {
    width: '80%',
    margin: '20px auto',
    minHeight: '100px',
    backgroundColor: '#cacaca',
    padding: '25px'
}

export class DemoRouter extends Component {
    constructor(props) {
        super(props);

        document.title = 'Demo Router';
    }

    render() {
        return (
            <div style={DemoRouterStyle}>
                <LoadableLink1 />
                <LoadableLink2 />
                <LoadableLink3 />
            </div>
        )
    }
}

export default DemoRouter;