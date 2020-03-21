import axios from 'axios';

import * as actionTypes from './actionTypes';

export const loginActionCreator = (userData) => {
    return {
        type: actionTypes.SIGN_IN,
        userData: userData,
    }
}

export const loginAction = (loginData) => {
    /**
     *  const authData = {
            email: stateInputs.email.value,
            password: stateInputs.password.value,
            returnSecureToken: true
        }
     */
    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFHWalRcnvl1lBVLzwFR7IOzJciiGbwZ0', loginData)
            .then(response => dispatch(loginActionCreator(response.data)))
    }
}
