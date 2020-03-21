import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LoginInput from './LoginInput/LoginInput';
import RememberMe from './RememberMe/RememberMe';
import { validation } from '../../../utility/validation';
import LoginTitle from './LoginTitle/LoginTitle';
import { loginAction } from '../../../store/actions/authentication';

const LoginForm = (props) => {
    const [rememberMe, setRememberMe] = useState(false);

    const [stateInputs, setStateInputs] = useState({
        email: {
            config: {
                label: 'Email address',
                type: 'email',
                placeholder: 'Enter email',
            },
            validationRules: {
                isRequred: true,
                isEmail: true,
            },
            isValid: false,
            validationMessage: '',
            value: '',
        },
        password: {
            config: {
                label: 'Password',
                type: 'password',
                placeholder: 'Password',
            },
            validationRules: {
                isRequred: true,
                minLength: true,
            },
            isValid: false,
            validationMessage: '',
            value: '',
        },
    });

    useEffect(() => {
        if (props.userEmail) props.history.push('/profile')
    }, [props.userEmail])

    const signInHandler = (event) => {
        event.preventDefault();

        const loginData = {
            email: stateInputs.email.value,
            password: stateInputs.password.value,
            returnSecureToken: true
        };

        props.signIn(loginData, rememberMe);
    }

    const toggleRememberMe = () => {
        setRememberMe(prevState => !prevState);
    }

    const onInputHandler = (inputName, event) => {
        const newValue = event.target.value;

        const [currentValid, newValidationMessage] = validation(
            newValue,
            stateInputs[inputName].validationRules,
        );

        setStateInputs(prevState => ({
            ...prevState,
            [inputName]: {
                ...prevState[inputName],
                value: newValue,
                isValid: currentValid,
                validationMessage: newValidationMessage
            }
        }));
    }

    let inputs = [];
    let fieldsIsValid = true;

    for (let key in stateInputs) {
        inputs.push(
            <LoginInput
                key={key}
                label={stateInputs[key].config.label}
                type={stateInputs[key].config.type}
                placeholder={stateInputs[key].config.placeholder}
                value={stateInputs[key].value}
                onInput={onInputHandler.bind(this, key)}
                error={!stateInputs[key].isValid && stateInputs[key].value.length > 0}
                helperText={stateInputs[key].validationMessage}
            />
        );

        fieldsIsValid = stateInputs[key].isValid && fieldsIsValid;
    }

    return (
        <React.Fragment>
            <LoginTitle />
            <Form>
                {inputs}

                {props.loginError
                    ? <div className="alert alert-danger" role="alert">The username or password you entered is incorrect!</div>
                    : null
                }

                <RememberMe toggleRememberMe={toggleRememberMe} />
                <Button
                    variant="primary"
                    type="submit"
                    onClick={signInHandler}
                    disabled={!fieldsIsValid}>Login</Button>
            </Form>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        userEmail: state.auth.email,
        loginError: state.auth.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (loginData, rememberMe) => { dispatch(loginAction(loginData, rememberMe)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
