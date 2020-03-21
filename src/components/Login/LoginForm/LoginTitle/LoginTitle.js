import React from 'react';
import Logo from '../../../../assets/image/logo-black.png';

import classes from './LoginTitle.module.css';

const LoginTitle = () => {
    return (
        <div className={classes.titleBlock}>
            <div>
                <img src={Logo} alt={'Logo'} width='70' height='70' />
            </div>
            <div className={classes.titleText}>Please Sign in</div>
        </div>
    )
}

export default LoginTitle;
