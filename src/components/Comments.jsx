import React, { Component } from 'react';
import * as api from '../utils/api';
import { Link, navigate } from '@reach/router';
import { StyledComments } from '../styled/comments';
import { Ring } from 'react-awesome-spinners';
import ErrorDisplay from './ErrorDisplay';
import CommentCard from './CommentCard';
import PostComment from './PostComment';
import Vote from './Vote';
import { convertTime } from '../utils/utils';
import { ReactComponent as Star } from '../images/asterisk-solid.svg';
import { ReactComponent as Right } from '../images/chevron-circle-right-solid.svg';
import { ReactComponent as Left } from '../images/chevron-circle-left-solid.svg';

class Comments extends Component {
  state = {
    comments: [],
    article: { created_at: '' },
    isLoading: true,
    page: 1,
  };

  getComments = () => {
    api
      .fetchCommentsByArticleId(this.props.article_id)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  };

  componentDidMount() {
    api.fetchArticleById(this.props.article_id).then((article) => {
      this.setState({ article });
    });
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.setState({ isLoading: true });
      this.getComments();
    }
  }

  deleteComment = (id) => {
    const { article_id } = this.state.article;
    let comments;
    this.setState((currState) => {
      comments = [...currState.comments];
      const newComments = comments.filter((comment) => {
        return comment.comment_id !== id;
      });
      return { comments: newComments };
    });
    this.setState({ isLoading: true });
    api
      .deleteItem('comments', id)
      .then(() => {
        navigate(`/articles/${article_id}/deleted`);
      })
      .catch((err) => {
        navigate(`/articles/${article_id}/deleted`, { state: { err } }).then(
          () => {
            this.setState({
              comments
            });
          }
        );
      });
  };

  addComment = (newComment) => {
    this.setState((currState) => {
      return {
        comments: [newComment, ...currState.comments]
      };
    });
  };

  changePage = (inc) => {
    this.setState((currState) => {
      return {
        page: currState.page + inc
      };
    });
  };

  render() {
    const { comments, article, err, isLoading, page } = this.state;
    const {
      author,
      title,
      body,
      votes,
      article_id,
      created_at,
      topic
    } = article;
    const convertedTime = convertTime(created_at);
    if (isLoading)
      return (
        <div className="ring">
          <Ring />
        </div>
      );

    if (err) {
      const { response } = err;
      return <ErrorDisplay status={response.status} msg={response.data.msg} />;
    }
    return (
      <StyledComments>
        <span className="topic">
          <Star />

          <Link key={topic} to={`/${topic}/articles`}>
            {topic}
          </Link>
        </span>
        <section className="article">
          <span className="author-date">
            <p>Posted by </p>
            <Link to={`/?author=${author}`}>
              <button className="author">{author}</button>
            </Link>
            <p>on {convertedTime}</p>
          </span>
          <h2>{title}</h2>
          <p>{body}</p>
          <Vote votes={votes} id={article_id} item="articles" />
        </section>
        <PostComment
          addComment={this.addComment}
          id={article_id}
        />
        <CommentCard deleteComment={this.deleteComment} comments={comments} />
        {comments.length > 10 && 
          <span className="page-btn-wrapper">
            <button
              disabled={page === 1}
              onClick={() => {
                this.changePage(-1);
              }}
            >
              <Left />
              Previous
            </button>
            <span> {this.state.page}</span>
            <button
              disabled={page * 10 > comments.length}
              onClick={() => {
                this.changePage(+1);
              }}
            >
              <Right />
              Next
            </button>
          </span>
        }
      </StyledComments>
    );
  }
}

export default Comments;
