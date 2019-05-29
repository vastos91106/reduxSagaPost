import React from 'react';

import Post from './Post';

const Posts = ({posts}) => {
    return (
        <div className="container">
            {
                posts.map((post) => {
                    return <Post key={post.id} {...post}/>
                })
            }
        </div>
    )
};

export default Posts;