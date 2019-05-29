import React from 'react';
import {connect} from "react-redux";

import {FETCH_POSTS_ASYNC} from "../store/posts/types";

import LoadingWrapper from '../components/LoadingWrapper';
import Posts from '../components/Posts';


class PostsContainer extends React.Component {

    componentDidMount() {
        if (this.props.postsService.posts.length === 0 && this.props.postsService.loading.isLoading) {
            this.props.fetchPosts();
        }
    }

    render() {
        return (
            <>
                <LoadingWrapper
                    percent={this.props.postsService.loading.percent}
                    isLoading={this.props.postsService.loading.isLoading}
                >
                    <Posts posts={this.props.postsService.posts}/>
                </LoadingWrapper>
            </>
        )
    }
}

function mapStateToProps(state) {

    return {
        postsService: state.postsService
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => {
            dispatch({type: FETCH_POSTS_ASYNC})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)