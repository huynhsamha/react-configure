import React, { Component } from 'react';

export class Link1 extends Component {
    constructor(props) {
        super(props);

        document.title = 'Link 1';
    }

    render() {
        return (
            <div>
                Link 1
            </div>
        )
    }
}

export default Link1;