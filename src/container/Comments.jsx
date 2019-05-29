import React from 'react';
import {connect} from "react-redux";

import LoadingWrapper from '../components/LoadingWrapper';
import Comments from '../components/Comments';

import {FETCH_COMMENTS_ASYNC} from '../store/comments/types';

class CommentsContainer extends React.Component {
    componentDidMount() {
        this.props.getComments();
    }

    render() {
        return (
            <>
                <LoadingWrapper percent={this.props.commentsService.loading.percent}
                                isLoading={this.props.commentsService.loading.isLoading}
                >
                    <Comments comments={this.props.commentsService.comments}/>
                </LoadingWrapper>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        commentsService: state.commentsService
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getComments: () => {
            dispatch({type: FETCH_COMMENTS_ASYNC})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)