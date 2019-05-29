import {POSTS_LOADING, POSTS_RECEIVED, POSTS_FETCH_FAILED, POSTS_LOADING_PERCENT, initialState} from './types';

function loadingFilter(state, action) {
    switch (action.type) {
        case POSTS_LOADING:
            state.isLoading = action.isLoading;
            return state;

        case POSTS_LOADING_PERCENT:
            state.percent = action.percent;
            return state;

        default:
            return state;
    }
}

function posts(state = [], action) {
    switch (action.type) {
        case POSTS_RECEIVED:
            return [
                ...state,
                ...action.posts
            ];

        default:
            return state;
    }
}

function error(state = initialState.error, action) {
    switch (action.type) {
        case POSTS_FETCH_FAILED:
            return Object.assign(state, action.error);

        default:
            return state;
    }
}

export default function postsReducer(state = initialState, action) {
    return {
        error: error(state.error, action),
        posts: posts(state.posts, action),
        loading: loadingFilter(state.loading, action)
    }
}