import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../../../assets/image/logo.png';
import classes from './NavigationBrand.module.css';

const NavigationBrand = () => {
    return (
        <Navbar.Brand>
            <Link to="/" className={classes.brandLink}>
                <img
                    alt="Logo"
                    src={Logo}
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                />{' '}
                <div>Home</div>
            </Link>
        </Navbar.Brand>
    )
}

export default NavigationBrand;