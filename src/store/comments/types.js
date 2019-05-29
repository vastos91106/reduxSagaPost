export const FETCH_COMMENTS_ASYNC = 'FETCH_COMMENTS_ASYNC';

export const COMMENTS_RECEIVED = 'COMMENTS_RECEIVED';

export const COMMENTS_LOADING = 'COMMENTS_LOADING';
export const COMMENTS_LOADING_PERCENT = 'COMMENTS_LOADING_PERCENT';
export const COMMENTS_INIT_DATA = 'COMMENTS_INIT_DATA';

export const COMMENTS_FETCH_FAILED = 'COMMENTS_FETCH_FAILED';

export const initialState = {
    loading: {
        isLoading: true,
        percent: 0
    },
    comments: [],
    error: {
        isError: false,
        message: ''
    }
};