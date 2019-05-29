import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import {store} from "./store/configureStore";

import {Provider} from "react-redux";

import PostsContainer from './container/Posts';
import PostContainer from './container/Post';

function App() {
    console.log(store.getState());
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route exact={true} path={'/'} component={PostsContainer}/>
                <Route exact={true} path={'/post/:postId'} component={PostContainer}/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
