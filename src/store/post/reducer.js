import {POST_LOADING, POST_RECEIVED, POST_FETCH_FAILED, POST_LOADING_PERCENT, initialState} from './types';

function loadingFilter(state = initialState.loading, action) {
    switch (action.type) {
        case POST_LOADING:
            state.isLoading = action.isLoading;
            return state;

        case POST_LOADING_PERCENT:
            state.percent = action.percent;
            return state;

        default :
            return state;
    }
}

function post(state = initialState.post, action) {
    switch (action.type) {
        case POST_RECEIVED:
            return Object.assign(state, action.post);

        default:
            return state;
    }
}

function error(state = initialState.error, action) {
    switch (action.type) {
        case POST_FETCH_FAILED:
            return Object.assign(state, action.error);

        default:
            return state;
    }
}

export default function postReducer(state = {}, action) {
    return {
        error: error(state.error, action),
        post: post(state.post, action),
        loading: loadingFilter(state.loading, action)
    }
}