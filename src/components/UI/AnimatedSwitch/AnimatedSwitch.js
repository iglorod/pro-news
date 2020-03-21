import React from 'react';
import { AnimatedSwitch } from 'react-router-transition';

import classes from './AnimatedSwitch.module.css';

const animatedSwitch = (props) => {
    let switchClass = classes.pageWrapper;
    if (props.classProp) switchClass = classes[props.classProp]; 

    return (
        <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
            className={switchClass}
        >
            {props.children}
        </AnimatedSwitch>
    )
}

export default animatedSwitch;