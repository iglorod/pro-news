import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import News from '../News/News';
import Home from '../Home/Home';
import Navbar from '../Navigation/Navigation';

const layout = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path={'/profile'} component={Profile} exact />
                <Route path={'/login'} component={Login} exact />
                <Route path={'/news'} component={News} exact />
                <Route path={'/'} component={Home} />
            </Switch>
        </React.Fragment>
    )
}

export default layout;
