import React, { Component } from 'react';

export class Link2 extends Component {
    constructor(props) {
        super(props);

        document.title = 'Link 2';
    }

    render() {
        return (
            <div>
                Link 2
            </div>
        )
    }
}

export default Link2;