import React, { Component } from 'react';
import { StyledInputBar } from '../styled/inputbar';
import * as api from '../utils/api';

class PostComment extends Component {
  state = {
    comment: ''
  };

  handleInput = (event) => {
    const comment = this.state.comment
    event.preventDefault();
    if (comment === "") {
      alert("Comment cannot be empty")

    }
    else {
    api.postComment(this.props.id, comment);
    this.setState({ comment: '' });}
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ comment: value });
  };
  render() {
    return (
      <StyledInputBar>
        <form onSubmit={this.handleInput}>
          <label htmlFor="">Comment as jessjelly</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleChange}
          ></textarea>
          <button>Submit</button>
        </form>
      </StyledInputBar>
    );
  }
}

export default PostComment;
