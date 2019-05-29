import {
    initialState,
    COMMENTS_FETCH_FAILED,
    COMMENTS_RECEIVED,
    COMMENTS_LOADING,
    COMMENTS_LOADING_PERCENT,
    COMMENTS_INIT_DATA
} from './types';

function comments(state = initialState.comments, action) {

    switch (action.type) {
        case COMMENTS_RECEIVED:
            return [
                ...state,
                ...action.comments
            ];

        case COMMENTS_INIT_DATA:
            return action.payload;

        default:
            return state;
    }
}

function error(state = initialState, action) {
    switch (action.type) {
        case COMMENTS_FETCH_FAILED:
            return Object.assign(state.error, action.error);

        default:
            return state.error;
    }
}

function loading(state = initialState.loading, action) {
    switch (action.type) {
        case COMMENTS_LOADING:
            state.isLoading = action.isLoading;
            return state;

        case  COMMENTS_LOADING_PERCENT:
            state.percent = action.percent;
            return state;

        default:
            return state;
    }
}

export default function commentsReducer(state = initialState, action) {
    return {
        error: error(state.error, action),
        comments: comments(state.comments, action),
        loading: loading(state.loading, action)
    }
}