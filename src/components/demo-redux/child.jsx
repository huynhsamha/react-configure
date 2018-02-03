import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import * as Actions from './../../actions/index.js';

class Child extends Component {
    constructor(props) {
        super(props);

        document.title = 'Demo Redux';
    }

    render() {
        return (
            <div>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/H0kmTTJP9KkYSbmFSxqzoU1xFTs=/0x0:3994x2663/1200x800/filters:focal(1837x1338:2475x1976)/cdn.vox-cdn.com/uploads/chorus_image/image/57285951/usa_today_9802867.0.jpg"
                    alt="basketball" width="500"
                    style={{ display: !this.props.hideImage ? 'initial' : 'none' }} />


                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th className="text-center" width="10%">#</th>
                            <th className="text-center" width="10%">ID</th>
                            <th className="text-center" width="30%">Name</th>
                            <th className="text-center" width="10%">Leave</th>
                            <th className="text-center" width="30%">Price</th>
                            <th className="text-center" width="10%">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((o, i) =>
                            <tr key={o.id}>
                                <th className="text-center" scope="row">{i}</th>
                                <th className="text-center">{o.id}</th>
                                <td>{o.name}</td>
                                <td className="text-right">{o.leave}</td>
                                <td className="text-right">{o.price}</td>
                                <td className="text-center">
                                    <i className="fa fa-trash-o" 
                                        onClick={() => this.onClickRemoveItem(o.id)}></i>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }

    onClickRemoveItem = (id) => {
        console.log('click remove', id);
        this.props.removeItem(id);
    }
}

const mapStateToProps = state => {
    return {
        hideImage: state.Demo1,
        items: state.Demo2
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: (id) => {
            console.log('dispatch demo 2');
            dispatch(Actions.removeDemo2(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Child);