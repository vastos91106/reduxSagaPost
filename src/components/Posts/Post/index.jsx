/* eslint-disable */

import React from 'react';
import {Link} from "react-router-dom";

const Post = ({id, photo, title, author, description, date, commentsCount}) => {
    return (
        <div className="well">
            <div className="media">
                <Link className="pull-left" to={`/post/${id}`}>
                    <img className="media-object" src={photo}/>
                </Link>
                <div className="media-body">
                    <h4 className="media-heading">{title}</h4>
                    <p className="text-right">{author}</p>
                    <p>{description}</p>
                    <ul className="list-inline list-unstyled">
                        <li><span><i className="glyphicon glyphicon-calendar"></i> {date}</span></li>
                        <li>|</li>
                        <span><i className="glyphicon glyphicon-comment"></i> {commentsCount} comments</span>
                        <li>|</li>
                        <li>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star-empty"></span>
                        </li>
                        <li>|</li>
                        <li>
                            <span><i className="fa fa-facebook-square"></i></span>
                            <span><i className="fa fa-twitter-square"></i></span>
                            <span><i className="fa fa-google-plus-square"></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Post;