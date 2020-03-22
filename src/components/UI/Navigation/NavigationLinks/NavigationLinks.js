import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import NavigationLink from './NavigationLink/NavigationLink';
import LogoutButton from './LogoutButton/LogoutButton'; 

const NavigationLinks = () => {
    return (
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <NavigationLink to="/news">News</NavigationLink>
                <NavigationLink to="/profile">Profile</NavigationLink>
            </Nav>
            <LogoutButton />
        </Navbar.Collapse>
    )
}

export default NavigationLinks;
