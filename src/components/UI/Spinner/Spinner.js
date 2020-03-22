import React from 'react';
import { Spinner } from 'react-bootstrap';

import classes from './Spinner.module.css';

const ModalSpinner = (props) => {
    if (!props.show) return null;

    return <Spinner className={classes.spinner} animation="grow" />
}

export default ModalSpinner;
