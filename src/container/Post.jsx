import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import LoadingWrapper from '../components/LoadingWrapper';
import Post from '../components/Posts/Post';

import CommentsContainer from './Comments';

import {setLoading} from '../store/post/action';
import {FETCH_POST_ASYNC} from '../store/post/types';

class PostContainer extends React.Component {
    componentDidMount() {
        const postId = Number.parseInt(this.props.match.params.postId);

        if (this.props.postService.post.id !== postId) {
            this.props.getPost(postId);
        }
    }

    render() {
        return (
            <LoadingWrapper
                percent={this.props.postService.loading.percent}
                isLoading={this.props.postService.loading.isLoading}>
                <div className={'container'}>
                    <div className={'row'}>
                        <Link to={'/'}>
                            Back
                        </Link>
                    </div>
                    {
                        this.props.postService.error.isError &&
                        <div className={'row'}>
                            <div className="alert alert-danger" role="alert">
                                {this.props.postService.error.message}
                            </div>
                        </div>
                    }
                    {
                        !this.props.postService.error.isError &&
                        <>
                            <div className={'row'}>
                                <Post {...this.props.postService.post}/>
                            </div>
                            < div className={'row'}>
                                <CommentsContainer/>
                            </div>
                        </>
                    }
                </div>
            </LoadingWrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        postService: state.postService
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps);

    return {
        setLoading: () => {
            dispatch(setLoading(true))
        },
        getPost: (postId) => {
            dispatch({type: FETCH_POST_ASYNC, postId: postId})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)