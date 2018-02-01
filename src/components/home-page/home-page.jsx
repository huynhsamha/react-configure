import React, { Component } from 'react';
import './home-page.css';

export class HomePage extends Component {
    constructor(props) {
        super(props);

        document.title = 'Home Page';
    }

    render() {
        return (
            <div className="HomePage">
                Home Page
            </div>
        )
    }
}

export default HomePage;