import {takeEvery, call, put, delay} from 'redux-saga/effects';

import {
    FETCH_POSTS_ASYNC,
    POSTS_RECEIVED,
    POSTS_FETCH_FAILED,
    POSTS_LOADING,
    POSTS_LOADING_PERCENT
} from '../store/posts/types';
import {
    FETCH_POST_ASYNC,
    POST_RECEIVED,
    POST_FETCH_FAILED,
    POST_LOADING,
    POST_LOADING_PERCENT
} from '../store/post/types';

import {getPosts, getPost} from "../api";

function* fetchPosts() {
    yield put({type: POSTS_LOADING, isLoading: true});
    yield put({type: POSTS_LOADING_PERCENT, percent: 20});

    try {
        const posts = yield call(getPosts);
        yield delay(1000);
        yield put({type: POSTS_LOADING_PERCENT, percent: 40});
        yield delay(1000);
        yield put({type: POSTS_LOADING_PERCENT, percent: 60});
        yield delay(1000);
        yield put({type: POSTS_LOADING_PERCENT, percent: 100});
        yield delay(1000);
        yield put({type: POSTS_RECEIVED, posts: posts});
    } catch (e) {
        yield put({type: POSTS_FETCH_FAILED, error: {isError: true, message: '500 error opps'}})
    } finally {
        yield put({type: POSTS_LOADING, isLoading: false});
    }
}

function* fetchPost(arg) {
    yield put({type: POST_LOADING, isLoading: true});
    yield put({type: POST_LOADING_PERCENT, percent: 20});

    try {
        const post = yield call(getPost, arg.postId);

        yield put({type: POST_LOADING_PERCENT, percent: 40});
        yield delay(1000);
        yield put({type: POST_LOADING_PERCENT, percent: 100});
        yield delay(1000);

        yield put({type: POST_RECEIVED, post: post});
    } catch (e) {
        yield put({type: POST_FETCH_FAILED, error: {isError: true, message: e}})
    } finally {
        yield put({type: POST_LOADING, isLoading: false});
    }
}


export function* watchPost() {
    yield takeEvery(FETCH_POSTS_ASYNC, fetchPosts);
    yield takeEvery(FETCH_POST_ASYNC, fetchPost)
}