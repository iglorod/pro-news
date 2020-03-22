import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import AnimatedSwitch from '../UI/AnimatedSwitch/AnimatedSwitch';
import { connect } from 'react-redux'
import { loginLocalyActionCreator } from '../../store/actions/authentication';

import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import News from '../News/News';
import Home from '../Home/Home';
import Navbar from '../UI/Navigation/Navigation';

const Layout = (props) => {
    useEffect(() => {
        if (localStorage.getItem('email')) props.signInLocaly(); //YOU SHALL NOT PASS!
    }, [])
    
    return (
        <React.Fragment>
            <Navbar />
            <AnimatedSwitch>
                <Route path={'/profile'} component={Profile} exact />
                <Route path={'/login'} component={Login} exact />
                <Route path={'/news'} component={News} exact />
                <Route path={'/'} component={Home} />
            </AnimatedSwitch>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signInLocaly: () => { dispatch(loginLocalyActionCreator()) },
    }
}

export default connect(null, mapDispatchToProps)(Layout);
