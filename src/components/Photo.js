import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends Component {
    render() {
        let { post, index, comments } = this.props;
        return(
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/reduxstagram/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo" />
                    </Link>

                    <CSSTransitionGroup transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup>

                    <figcaption>
                        <p>{post.caption}</p>
                        <div className="control-buttons">
                            <button className="likes" onClick={this.props.increment.bind(null, index)}>&hearts; {post.likes}</button>
                            <Link to={`/reduxstagram/view/${post.code}`} className="button">
                                <span className="comment-count">
                                    <span className="speech-bubble">
                                        {comments[post.code] ? comments[post.code].length : 0}
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </figcaption>
                </div>
            </figure>
        )
    }
};

export default Photo;