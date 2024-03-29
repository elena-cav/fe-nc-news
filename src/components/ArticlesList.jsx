import React, { Component } from 'react';
import * as api from '../utils/api';
import { StyledArticles } from '../styled/articles';
import { navigate } from '@reach/router';
import ArticleCard from './ArticleCard';
import Sort from './Sort';
import ErrorDisplay from './ErrorDisplay';
import { Ring } from 'react-awesome-spinners';
import { ReactComponent as Right } from '../images/chevron-circle-right-solid.svg';
import { ReactComponent as Left } from '../images/chevron-circle-left-solid.svg';
import queryString from 'query-string';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    page: 1,
    sort_by: 'votes',
    total_count: 0,
    author: ''
  };

  getArticles = (topic, getAuthorFromURL = false) => {
    const newAuthor = getAuthorFromURL
      ? queryString.parse(this.props.location.search).author
      : this.state.author;

    this.setState({ author: newAuthor, isLoading: true }, () => {
      const { sort_by, page, author } = this.state;
      api
        .fetchArticles({ topic, sort_by, page, author })
        .then((articles) => {
          this.setState({ articles, isLoading: false });
        })
        .catch((err) => {
          this.setState({ err, isLoading: false });
        });
    });
  };

  componentDidMount() {
    const { topic } = this.props;
    this.getArticles(topic, true);
    const storedSortBy = sessionStorage.getItem('sort_by');
    if (storedSortBy) {
      this.setState({ sort_by: storedSortBy });
    }
  }

 componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { page, sort_by, author} = this.state;
    if (
      prevProps.topic !== topic ||
      prevState.sort_by !== sort_by ||
      prevState.page !== page || 
      prevState.author !== author
    ) {
      this.setState({ isLoading: true });
      this.getArticles(topic);
    }
  }
  changePage = (inc) => {
    this.setState((currState) => {
      return {
        page: currState.page + inc
      };
    });
  };

  sortArticles = (sort_by) => {
    this.setState({ sort_by });
    sessionStorage.setItem('sort_by', sort_by)
  };

  filterByAuthor = (author) => {
    this.setState({ author });
  };

  resetAuthor = () => {
    navigate('/');
    this.setState({ author: '' }, () => {
      this.getArticles(this.props.topic);
    });
  };

  deleteArticle = (id) => {

    api.deleteItem('articles', id).then(() => {
        navigate(`/articles/${id}/deleted`, {state: {item: 'articles'}});
      })
      .catch((err) => {
        navigate(`/articles/${id}/deleted`, { state: { err } })
    });
  };

  render() {
    const { author, articles, isLoading, err, page } = this.state;
    const { topic } = this.props;

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
      <StyledArticles>
        <h2>{topic}</h2>
        <Sort sortArticles={this.sortArticles} />
        {author !== undefined && (
          <button
            onClick={() => {
              this.resetAuthor();
            }}
          >
            All articles
          </button>
        )}

        <ul>
          {articles.map(
            ({
              article_id,
              title,
              body,
              votes,
              topic,
              author,
              created_at,
              comment_count
            }) => {
              return (
                <ArticleCard
                  deleteArticle={this.deleteArticle}
                  filterByAuthor={this.filterByAuthor}
                  topic={topic}
                  created_at={created_at}
                  key={article_id}
                  author={author}
                  title={title}
                  body={body}
                  votes={votes}
                  article_id={article_id}
                  comment_count={comment_count}
                />
              );
            }
          )}
        </ul>
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
            disabled={page * 10 > articles.length}
            onClick={() => {
              this.changePage(+1);
            }}
          >
            <Right />
            Next
          </button>
        </span>
      </StyledArticles>
    );
  }
}

export default ArticlesList;
