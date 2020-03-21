import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import NavigationLink from './NavigationLink/NavigationLink';

const NavigationLinks = (props) => {
    let logoutLink = null;
    if (props.userEmail) {
        logoutLink = (
            <Button variant="outline-light">
                {props.userEmail.split('@')[0]} (Logout)
            </Button>
        )
    }

    return (
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <NavigationLink to="/news">News</NavigationLink>
                <NavigationLink to="/profile">Profile</NavigationLink>
            </Nav>
            {logoutLink}
        </Navbar.Collapse>
    )
}

const mapStateToProps = (state) => {
    return {
        userEmail: state.auth.email,
    }
}

export default connect(mapStateToProps)(NavigationLinks);
