import React, { Component } from 'react';
import { StyledComments } from '../styled/comments';
import { Ring } from 'react-awesome-spinners';
import ErrorDisplay from './ErrorDisplay'

import * as api from '../utils/api';
import PostComment from './PostComment';
import VoteArticle from './VoteArticle';
import VoteComment from './VoteComment'
import {convertTime} from '../utils/utils'
class Comments extends Component {
  state = {
    comments: [],
    article: {created_at: ""},
    isLoading: true
  };

  componentDidMount() {
    api.fetchArticleById(this.props.article_id).then((article) => {
      this.setState({ article });
    })

    api.fetchCommentsByArticleId(this.props.article_id).then((comments) => {
      this.setState({ comments, isLoading: false  });
    }).catch((err) => {
        this.setState({ err, isLoading: false });
      });
  }

  render() {
    const { comments, article, err, isLoading} = this.state;
    const convertedTime = convertTime(article.created_at)
    if (isLoading) return <Ring />;
        if (err) {
      const { response } = err;
      return <ErrorDisplay status={response.status} msg={response.data.msg} />;
    }
    return (
      <StyledComments>
        {/* <Link >topic</Link> */}
        <section className="article">
          <h1>comments</h1>
          <p>
            Posted by {article.author} on {convertedTime}
          </p>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <p>{article.votes} votes</p>
          <VoteArticle article_id={article.article_id}/>
        </section>
        <ul>
          <PostComment id={this.props.article_id} />
          {comments.map(({ created_at, comment_id, body, author, votes }) => {
            return (
              <li className="comment" key={comment_id}>
                <p>
                  Posted by {author} {convertedTime}
                </p>
                <p>{body}</p>
                <p>{votes} votes</p>

                { author  === 'jessjelly' ? <button onClick={() => {api.deleteComment(comment_id)}}>delete comment</button>
                : <VoteComment comment_id={comment_id}/>}
                
              </li>
            );
          })}
        </ul>
      </StyledComments>
    );
  }
}

export default Comments;
