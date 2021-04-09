import { StyledInputBar } from '../styled/inputbar';
import React, { Component } from 'react';

import * as api from '../utils/api';

class PostComment extends Component {
  state = {
    comment: '',
    err: null,
    submitCount: 0,
    alertMessage: ''
  };

  handleInput = (event) => {
    const newComment = this.state.comment;
    event.preventDefault();
    if (newComment === '') {
      this.setState({ alertMessage: 'Comment cannot be empty' });
    } else {
      this.setState({ submitCount: 1, alertMessage: '' });
      api
        .postComment(this.props.id, newComment)
        .then((newComm) => {
          this.setState({ comment: '' });
          this.props.addComment(newComm);
        })
        .then(() => {
          this.setState({ submitCount: 0 });
        })
        .catch((err) => {
          this.setState({ comment: newComment });
          this.setState({ err });
        });
    }
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ comment: value });
  };

  render() {
    const { comment, err, submitCount, alertMessage } = this.state;

    return (
      <StyledInputBar>
        {err && (
          <h3>
            {err.response.status} - {err.response.data.msg}
          </h3>
        )}
        <form onSubmit={this.handleInput}>
          <label htmlFor="">Comment as jessjelly</label>
          <textarea value={comment} onChange={this.handleChange}></textarea>
          <button disabled={submitCount > 0}>Submit</button>
        </form>
        <p>{alertMessage}</p>
      </StyledInputBar>
    );
  }
}

export default PostComment;
