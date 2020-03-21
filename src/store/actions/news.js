import axios from 'axios';

import * as actionTypes from './actionTypes';

export const loadNewsActionCreator = (articles) => {
    return {
        type: actionTypes.LOAD_NEWS,
        articles: articles,
    }
}

export const loadNewsAction = () => {
    return dispatch => {
        axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=a644175197bc4a979252ed51d8bfed8b')
            .then(response => dispatch(loadNewsActionCreator(response.data.articles)))
    }
}