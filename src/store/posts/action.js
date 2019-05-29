import {POSTS_RECEIVED, POSTS_LOADING, POSTS_FETCH_FAILED, POSTS_LOADING_PERCENT} from './types';

export function postsReceived(posts) {
    return {
        type: POSTS_RECEIVED,
        posts: posts
    }
}

export function setLoading(isLoading) {
    return {
        type: POSTS_LOADING,
        isLoading: isLoading
    }
}

export function setPercent(percent) {
    return {
        type: POSTS_LOADING_PERCENT,
        percent: percent
    }
}

export function setError(error) {
    return {
        type: POSTS_FETCH_FAILED,
        error: error
    }
}