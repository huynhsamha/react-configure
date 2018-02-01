import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
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

        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div style={DemoRouterStyle}>
                <Router>
                    <div>
                        <Navbar color="faded" light expand="md">
                            <NavbarBrand>Brand</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink><Link to="/link-1">Link to 1</Link></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><Link to="/link-2">Link to 2</Link></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><Link to="/link-3">Link to 3</Link></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><Link to="/link-not-found">Link to Page Not Found</Link></NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>

                        <Switch>
                            <Route exact path="/link-1" component={LoadableLink1} />
                            <Route exact path="/link-2" component={LoadableLink2} />
                            <Route exact path="/link-3" component={LoadableLink3} />
                            <Route render={(props) => <div>Page Not Found</div>}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default DemoRouter;