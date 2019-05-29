import {combineReducers} from "redux/es/redux";

import postsReducer from './posts/reducer';
import commentsReducer from './comments/reducer';
import postReducer from './post/reducer';

export const rootReducer = combineReducers({
    postsService: postsReducer,
    postService: postReducer,
    commentsService: commentsReducer
});