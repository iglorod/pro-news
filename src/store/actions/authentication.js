import axios from 'axios';

import * as actionTypes from './actionTypes';

export const loginActionCreator = (userData, remember) => {
    return {
        type: actionTypes.SIGN_IN,
        userData: userData,
        remember: remember,
    }
}

export const loginLocalyActionCreator = () => {
    return {
        type: actionTypes.SIGN_IN_LOCALY,
    }
}

export const loginErrorActionCreator = () => {
    return {
        type: actionTypes.SIGN_ERROR,
    }
}

export const logoutActionCreator = () => {
    return {
        type: actionTypes.LOGOUT,
    }
}

export const loginAction = (loginData, rememberMe) => {
    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFHWalRcnvl1lBVLzwFR7IOzJciiGbwZ0', loginData)
            .then(response => dispatch(loginActionCreator(response.data, rememberMe)))
            .catch(error => dispatch(loginErrorActionCreator()))
    }
}
