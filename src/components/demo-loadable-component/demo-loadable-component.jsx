import React, { Component } from 'react';

const StlyeComp = {
    backgroundColor: 'antiquewhite',
    minHeight: '200px',
    width: '80%',
    margin: '15px auto',
    padding: '25px'
}

export class DemoLoadableComponent extends Component {
    constructor(props) {
        super(props);

        document.title = 'Home Page';
    }

    render() {
        return (
            <div style={StlyeComp}>
                Home Page
            </div>
        )
    }
}

export default DemoLoadableComponent;