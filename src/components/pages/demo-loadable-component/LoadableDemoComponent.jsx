import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from './../../common/loading/Loading';

const LoadableComponent = Loadable({
    loader: () => import('./DemoLoadableComponent.jsx'),
    loading: Loading,
    delay: 300, // default is 200
    timeout: 10000
});

export default class LoadableDemoComponent extends Component {
    render() {
        return <LoadableComponent/>
    }
}
