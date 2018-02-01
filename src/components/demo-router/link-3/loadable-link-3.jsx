import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Loading } from './../../loading/loading';

const LoadableComponent = Loadable({
    loader: () => import('./link-3.jsx'),
    loading: Loading
});

export class LoadableLink3 extends Component {
    render() {
        return <LoadableComponent/>
    }
}