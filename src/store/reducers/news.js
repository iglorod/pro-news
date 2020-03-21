import * as actionTypes from '../actions/actionTypes';

const initialState = {
    articles: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_NEWS: {
            return {
                articles: [...action.articles],
            }
        }

        default: return state;
    }
}

export default reducer;
