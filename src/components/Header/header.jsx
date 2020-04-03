import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class Header extends Component {

    render() {
        return (
            <Fragment>
                <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top">
                    <Navbar.Brand href="#" className="ml-5">Job App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto pr-5">
                            <Nav.Link href="/" active>Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
} export default Header;