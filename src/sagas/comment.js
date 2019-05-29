import {takeEvery, put, call, delay} from 'redux-saga/effects';

import {getComments} from '../api';

import {
    FETCH_COMMENTS_ASYNC,
    COMMENTS_LOADING,
    COMMENTS_FETCH_FAILED,
    COMMENTS_RECEIVED,
    COMMENTS_LOADING_PERCENT,
    COMMENTS_INIT_DATA
} from '../store/comments/types';

function* fetchComments() {
    yield put({type: COMMENTS_LOADING, isLoading: true});
    yield put({type: COMMENTS_INIT_DATA, comments: []});
    yield put({type: COMMENTS_LOADING_PERCENT, percent: 10});

    try {
        const comments = yield call(getComments);
        yield delay(1000);
        yield put({type: COMMENTS_LOADING_PERCENT, percent: 40});
        yield delay(1000);
        yield put({type: COMMENTS_LOADING_PERCENT, percent: 100});
        yield delay(1000);
        yield put({type: COMMENTS_RECEIVED, comments: comments});
    } catch (e) {
        yield put({type: COMMENTS_FETCH_FAILED, error: e})
    } finally {
        yield put({type: COMMENTS_LOADING, isLoading: false});
    }
}

export function* watchComment() {
    yield takeEvery(FETCH_COMMENTS_ASYNC, fetchComments)
}