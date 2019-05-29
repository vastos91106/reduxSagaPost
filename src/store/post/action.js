import {POST_RECEIVED, POST_LOADING, POST_FETCH_FAILED, POST_LOADING_PERCENT} from './types';

export function postReceived(post) {
    return {
        type: POST_RECEIVED,
        post: post
    }
}

export function setLoading(isLoading) {
    return {
        type: POST_LOADING,
        isLoading: isLoading
    }
}

export function setLoadingPercent(percent) {
    return {
        type: POST_LOADING_PERCENT,
        percent: percent
    }
}

export function setError(error) {
    return {
        type: POST_FETCH_FAILED,
        error: error
    }
}