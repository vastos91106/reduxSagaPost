export const FETCH_POST_ASYNC = 'FETCH_POST_ASYNC';

export const POST_RECEIVED = 'POST_RECEIVED';
export const POST_LOADING = 'POST_LOADING';
export const POST_LOADING_PERCENT = 'POST_LOADING_PERCENT';
export const POST_FETCH_FAILED = 'POST_FETCH_FAILED';

export const initialState = {
    loading: {
        isLoading: true,
        percent: 0
    },
    post: {},
    error: {
        isError: false,
        message: ''
    }
};