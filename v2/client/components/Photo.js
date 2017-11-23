import React from 'react';

const Photo = React.createClass({
    render() {
        let post = this.props.post;
        return(
            <figure className="grid-figure">
                <p>
                    <img src={post.display_src} />
                    <span>{post.caption}</span>
                    <span>{post.likes}</span>
                </p>
            </figure>
        )
    }
});

export default Photo;