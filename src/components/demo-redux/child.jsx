import React, { Component } from 'react';
import {connect} from 'react-redux';


export class Child extends Component {
    constructor(props) {
        super(props);

        document.title = 'Demo Redux';
    }

    render() {
        return (
            <div>
                {this.props.hideImage ? 'true' : 'false'}
                <img src="http://www.movingimage.us/images/homepage/features/jhe_jim_kermit.jpg" alt=""
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hideImage: state.Demo1,
    }
}

export default connect(mapStateToProps)(Child);