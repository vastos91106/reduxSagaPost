import {spawn} from 'redux-saga/effects';

import {watchPost} from './post';
import {watchComment} from './comment';

export default function* root() {
    yield spawn(watchPost);
    yield spawn(watchComment);
}