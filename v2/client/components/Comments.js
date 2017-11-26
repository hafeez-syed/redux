import React from 'react';

const Comments = React.createClass({
	renderComment(comment, index) {
		return (
			<div className="comment" key={index}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, index)}>&times;</button>
				</p>
			</div>
		)
	},
	handleSubmit(eve) {
		eve.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	},
	render() {
		//const index = this.props.comments.findIndex((post) => post.code === this.props.params.postId);
		//const post = this.props.posts[index];
		return(
			<div className="comments">
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
});

export default Comments;