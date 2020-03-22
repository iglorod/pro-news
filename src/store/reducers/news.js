import * as actionTypes from '../actions/actionTypes';

const initialState = {
    articles: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_NEWS: {
            return {
                ...state,
                articles: [...action.articles],
            }
        }

        case actionTypes.LOAD_START: {
            return {
                ...state,
                loading: true,
            }
        }
        
        case actionTypes.LOAD_FINISH: {
            return {
                ...state,
                loading: false,
            }
        }

        default: return state;
    }
}

export default reducer;
