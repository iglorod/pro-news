import * as actionTypes from '../actions/actionTypes';

const initialData = {
    userName: null,
}

const reducer = (store = initialData, action) => {
    switch(action.type) {
        case actionTypes.SIGN_IN: {
            break;
        }

        default: return store;
    }
}

export default reducer;