import React from 'react';
/* eslint-disable */

const Comment = ({avatar, author, text}) => {
    return (
        <li className="media">
            <a className="pull-left" href="#">
                <img className="media-object img-circle"
                     src={avatar} alt="profile"/>
            </a>
            <div className="media-body">
                <div className="well well-lg">
                    <h4 className="media-heading text-uppercase reviews">{author} </h4>
                    <ul className="media-date text-uppercase reviews list-inline">
                        <li className="dd">22</li>
                        <li className="mm">09</li>
                        <li className="aaaa">2014</li>
                    </ul>
                    <p className="media-comment">
                        {text}
                    </p>
                    <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span
                        className="glyphicon glyphicon-share-alt"></span> Reply</a>
                    <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse"
                       href="#replyOne"><span className="glyphicon glyphicon-comment"></span> 2 comments</a>
                </div>
            </div>
        </li>
    )
};

export default Comment;