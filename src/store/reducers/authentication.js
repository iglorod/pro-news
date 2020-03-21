import * as actionTypes from '../actions/actionTypes';

const initialState = {
    email: null,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN: {
            const email = action.userData.email;

            if (action.remember) {
                localStorage.setItem('email', email);
            }

            return {
                ...initialState,
                email,
            }
        }

        case actionTypes.SIGN_IN_LOCALY: {
            const email = localStorage.getItem('email');

            return {
                ...initialState,
                email,
            }
        }

        case actionTypes.LOGOUT: {
            localStorage.clear();

            return {
                ...initialState,
            }
        }

        case actionTypes.SIGN_ERROR: {
            return {
                ...initialState,
                error: true,
            }
        }

        default: return state;
    }
}

export default reducer;
