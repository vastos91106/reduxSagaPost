export const FETCH_POSTS_ASYNC = 'FETCH_POSTS_ASYNC';

export const POSTS_RECEIVED = 'POSTS_RECEIVED';

export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_LOADING_PERCENT = 'POSTS_LOADING_PERCENT';
export const POSTS_FETCH_FAILED = 'POSTS_FETCH_FAILED';

export const initialState = {
    loading: {
        isLoading: true,
        percent: 0
    },
    posts: [],
    error: {
        isError: false,
        message: ''
    }
};