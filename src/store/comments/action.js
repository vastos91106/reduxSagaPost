import {COMMENTS_FETCH_FAILED, COMMENTS_LOADING, COMMENTS_RECEIVED, COMMENTS_LOADING_PERCENT} from './types';

export function setLoading(isLoading) {
    return {
        type: COMMENTS_LOADING,
        isLoading: isLoading
    }
}

export function setLoadingPercent(percent) {
    return {
        type: COMMENTS_LOADING_PERCENT,
        percent: percent
    }
}

export function setError(error) {
    return {
        type: COMMENTS_FETCH_FAILED,
        error: error
    }
}

export function setComments(comments) {
    return {
        type: COMMENTS_RECEIVED,
        comments: comments
    }
}