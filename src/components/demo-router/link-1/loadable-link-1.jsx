import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Loading } from './../../loading/loading';

const LoadableComponent = Loadable({
    loader: () => import('./link-1.jsx'),
    loading: Loading
});

export class LoadableLink1 extends Component {
    render() {
        return <LoadableComponent/>
    }
}