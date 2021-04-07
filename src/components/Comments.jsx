import React, { Component } from 'react';
import { StyledComments } from '../styled/comments';
// import { Link } from '@reach/router';
import * as api from '../utils/api';
// import {convertTime} from '../utils/utils'

class Comments extends Component {
  state = {
    comments: [],
    article: {}
  };

  componentDidMount() {
    api.fetchArticleById(this.props.article_id).then((article) => {
      this.setState({ article });
    });

    api.fetchCommentsByArticleId(this.props.article_id).then((comments) => {
      this.setState({ comments });
    });
  }

  render() {
    const { comments, article } = this.state;
    // const convertedTime = convertTime(article.created_at)

    return (
      <StyledComments>
        {/* <Link >topic</Link> */}
        <section className="article">
          <h1>comments</h1>
          <p>
            Posted by {article.author} at {article.created_at}
          </p>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <p>{article.votes} votes</p>
        </section>
        <ul>
          {comments.map(({ created_at, comment_id, body, author, votes }) => {
            return (
              <li className='comment' key={comment_id}>
                <p>
                  Posted by {author} at {created_at}
                </p>
                <p>{body}</p>
                <p>{votes} votes</p>
              </li>
            );
          })}
        </ul>
      </StyledComments>
    );
  }
}

export default Comments;
