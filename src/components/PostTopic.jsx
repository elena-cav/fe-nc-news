import React, { Component } from 'react';
import { StyledTopic } from '../styled/topic';
import * as api from '../utils/api';

class PostTopic extends Component {
  state = {
    slug: '',
    description: '',
    alertMessage: '',
    err: null
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.id;
    this.setState({ [key]: value });
  };

  handleInput = (event) => {
    const { slug, description } = this.state;
    event.preventDefault();
    if (slug === '' || description === '') {
      this.setState({ alertMessage: 'Fields cannot be empty' });
    } else {
      this.setState({ alertMessage: '' });
      api
        .postTopic(slug, description)
        .then((newTopic) => {
          console.log(newTopic)
          this.props.addTopic(newTopic);
          this.setState({ slug: '', description: '' });
        })
        .catch((err) => {
          this.setState({ err });
        });

      this.setState({ slug: '', description: '' });
    }
  };

  render() {
    const { description, slug, alertMessage } = this.state;
    return (
      <StyledTopic>
        <h1>Post a new Topic</h1>
        <form onSubmit={this.handleInput}>
          <label htmlFor="slug">Topic</label>
          <input
            onChange={this.handleChange}
            id="slug"
            value={slug}
            type="text"
          />
          <label htmlFor="description">Description</label>
          <textarea
            onChange={this.handleChange}
            id="description"
            value={description}
            type="text"
          />
          <button>Submit</button>
        </form>
        <p>{alertMessage}</p>
      </StyledTopic>
    );
  }
}

export default PostTopic;
