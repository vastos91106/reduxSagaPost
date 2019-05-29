import React from 'react';

import Comment from './Comment';

const Comments = ({comments}) => {
    return (
        <ul className="media-list">
            {
                comments.map((comment, index) => {
                    return <Comment key={index} {...comment}/>
                })
            }
        </ul>
    )
};

export default Comments;