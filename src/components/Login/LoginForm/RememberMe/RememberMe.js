import React from 'react';
import { Form } from 'react-bootstrap';

const RememberMe = (props) => {
    return (
        <Form.Group>
            <Form.Check
                id={'custom-checkbox'}
                type="checkbox"
                label="Remember me"
                onChange={props.toggleRememberMe}
                custom />
        </Form.Group>
    )
}

export default RememberMe;
