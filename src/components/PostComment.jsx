import { StyledInputBar } from '../styled/inputbar';
import React, { Component } from 'react';
import ErrorDisplay from './ErrorDisplay';

import * as api from '../utils/api';

class PostComment extends Component {
  state = {
    comment: '',
    err: null
  };

  handleInput = (event) => {
    const newComment = this.state.comment;
    event.preventDefault();
    if (newComment === '') {
      alert('Comment cannot be empty');
    } else {
      api
        .postComment(this.props.id, newComment)
        .then((newComm) => {
          this.setState({ comment: '' });
          this.props.addComment(newComm);
        })
        .catch((err) => {
          this.setState({ err });
        });
    }
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ comment: value });
  };

  render() {
    const { comment, err } = this.state;
    const { commentCount } = this.props;
    if (err) {
      const { response } = err;
      return <ErrorDisplay status={response.status} msg={response.data.msg} />;
    }
    return (
      <StyledInputBar>
        <form onSubmit={this.handleInput}>
          <label htmlFor="">Comment as jessjelly</label>
          <textarea value={comment} onChange={this.handleChange}></textarea>
          {commentCount > 0 && comment !== '' && (
            <p>You can only post once, come back another time!</p>
          )}

          <button disabled={commentCount > 0}>Submit</button>
        </form>
      </StyledInputBar>
    );
  }
}

export default PostComment;
