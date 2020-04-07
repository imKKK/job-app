import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { addSearch } from "../../actions/action";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHeader: true
        }
    }

    onChange = ({ currentTarget: Input }) => {
        const { name, value } = Input;
        this.setState({
            [name]: value
        })
    }

    storeSearch = (e) => {
        e.preventDefault();
        const { searchString } = this.state;
        this.props.addSearch("search", searchString);
    }

    render() {
        return (
            <Fragment>
                <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top">
                    <Navbar.Brand href="#" className="ml-md-5">
                        <span className="brandLogo">J</span> Job App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline onSubmit={this.storeSearch} className="ml-auto">
                            <FormControl
                                type="text"
                                name="searchString"
                                placeholder="Search by Title or Location"
                                className="mr-2" style={{ width: 300 }}
                                onChange={this.onChange} />
                            <Button variant="outline-primary" type="submit">Search</Button>
                        </Form>
                        <Nav className="ml-auto pr-5">
                            <Nav.Link href="/" active>Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
} export default connect(
    null,
    {
        addSearch: addSearch
    }
)(Header);