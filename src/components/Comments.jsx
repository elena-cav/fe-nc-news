import React, { Component } from 'react';
import { StyledComments } from '../styled/comments';
import { Ring } from 'react-awesome-spinners';
import ErrorDisplay from './ErrorDisplay';
import CommentCard from './CommentCard';
import * as api from '../utils/api';
import PostComment from './PostComment';
import VoteArticle from './VoteArticle';
import { convertTime } from '../utils/utils';
class Comments extends Component {
  state = {
    comments: [],
    article: { created_at: '' },
    isLoading: true
  };

  componentDidMount() {
    api.fetchArticleById(this.props.article_id).then((article) => {
      this.setState({ article });
    });

    api
      .fetchCommentsByArticleId(this.props.article_id)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  }

  render() {
    const { comments, article, err, isLoading } = this.state;
    const { author, title, body, votes, article_id, created_at } = article;
    const convertedTime = convertTime(created_at);
    if (isLoading) return <Ring />;
    if (err) {
      const { response } = err;
      return <ErrorDisplay status={response.status} msg={response.data.msg} />;
    }
    return (
      <StyledComments>
        {/* <Link >topic</Link> */}
        <section className="article">
          <p>
            Posted by {author} on {convertedTime}
          </p>
          <h2>{title}</h2>
          <p>{body}</p>
          <VoteArticle votes={votes} article_id={article_id} />
        </section>
        <PostComment id={article_id} />
        <CommentCard comments={comments} />
      </StyledComments>
    );
  }
}

export default Comments;
